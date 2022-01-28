from flask import render_template, redirect, request, session

from flask_app import app

from flask_app.models.user import User


@app.route('/')
def index():
    list_of_users = User.get_all()
    return render_template("Read.html", all_users = list_of_users)

@app.route("/user/new")
def new_user():
    return render_template("new_user.html")

@app.route("/user/user_one")
def user_one():
    return render_template("user_one.html")

@app.route("/user/create", methods = ["POST"])
def create_user():
    User.create(request.form)

    return redirect("/")

@app.route("/user/<int:user_id>/edit")
def edit_user(user_id):
    return render_template("edit_user.html", this_user = User.user_one({"id": user_id}) )

@app.route("/user/update", methods = ["POST"])
def update_user(user_id):
    updated_data = {
        **request.form,
        "id": dog_id
    }
    dog.update(updated_data)
    return redirect("/")

@app.route("/user/<int:user_id>/delete")
def delete_user(user_id):
    User.delete({"id":user_id})
