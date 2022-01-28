from flask import render_template, redirect, request, session
from flask_bcrypt import Bcrypt
import re

from flask_app import app
from flask import flash

from flask_app.models.user import User

bcrypt = Bcrypt(app)


@app.route("/")
def index():
    return render_template("read.html")

@app.route("/user/new")
def new_user():
    return render_template("new_user.html")

@app.route("/users")
def display_users():
    if "uuid" not in session:
        return redirect("/")

    return render_template("users.html", all_users = User.get_all(), user =  User.get_by_id({"id":session["uuid"]}))


@app.route("/user/user_one")
def user_one():
    return render_template("user_one.html")

@app.route("/user/create", methods = ["POST"])
def create_user():

    if not User.validator(request.form):
        return redirect("/")
    
    hash_browns = bcrypt.generate_password_hash(request.form["password"])

    user_data= {
        **request.form,
        "password": hash_browns
    }

    user_id = User.create(user_data)
    session["uuid"] = user_id

    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/user/<int:user_id>/edit")
def edit_user(user_id):
    if not User.validator(request.form):
        return redirect("/")

    return render_template("edit_user.html", this_user = User.user_one({"id": user_id}) )

@app.route("/user/update", methods = ["POST"])
def update_user(user_id):
    updated_data = {
        **request.form,
        "id": user_id
    }
    User.update(updated_data)
    return redirect("/")

@app.route("/user/<int:user_id>/delete")
def delete_user(user_id):
    User.delete({"id":user_id})

@app.route("/login", methods = ["POST"])
def login():

    if not User.login_validate(request.form):
        return redirect("/")

    user = User.get_by_email({"email":request.form["email"]})

    session['uuid'] = user.id

    return redirect("/dashboard")

@app.route("/logout")
def logout():
    session.clear()

    return redirect("/")


