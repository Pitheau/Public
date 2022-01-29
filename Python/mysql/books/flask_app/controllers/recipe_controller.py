from crypt import methods
from unicodedata import name
import uuid
from flask import render_template, redirect, request, session, flash

from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe


@app.route("/dashboard")
def dashboard_id():

    return render_template("dashboard.html", logged_in_user = User.user_one({"id": session["uuid"]}),
    all_recipes = Recipe.get_all()

    )

@app.route("/recipe/<int:recipe_id>")
def display_recipe(recipe_id):
    return render_template( "recipe.html", logged_in_user = User.user_one({"id": session["uuid"]}), recipe = Recipe.get_one({"id": recipe_id})
    )

@app.route("/recipe/new")
def new():
    return render_template("new.html")

@app.route("/recipe/create", methods = ["POST"])
def create():
    if not Recipe.validator(request.form):
        return redirect("/recipes/new")
    if request.form["under"] == "yes":
        x = 1
    else:
        x = 0

    
    recipe_data = {
        "user_id": session["uuid"],
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_on": request.form["date_on"],
        "under": x
    }

    Recipe.create(recipe_data)

    return redirect("/dashboard")

@app.route("/recipe/update/<int:recipe_id>", methods = ["POST"])
def update_recipe(recipe_id):
    if not Recipe.validator(request.form):
        return redirect(f"/recipes/edit/{recipe_id}")
    if request.form["under"] == "yes":
        x = 1
    else:
        x = 0

    
    recipe_data = {
        "id": recipe_id,
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_on": request.form["date_on"],
        "under": x
    }

    Recipe.update(recipe_data)

    return redirect("/dashboard")


@app.route("/recipe/edit/<int:recipe_id>")
def edit_recipe(recipe_id):
    return render_template("edit.html", recipe = Recipe.get_one({"id":recipe_id}))

@app.route("/recipe/delete/<int:hat_id>")
def delete_recipe(hat_id):
    Recipe.delete({"id":hat_id})
    return redirect("/dashboard")