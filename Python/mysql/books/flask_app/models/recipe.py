
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models import user

bcrypt = Bcrypt(app)


class Recipe:

    schema = "recipes_schema"

    def __init__( self , data ):
        self.id = data['id']
        self.user_id = data["user_id"]
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under = data['under']
        self.date_on = data["date_on"]
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = user.User.user_one({"id": data["user_id"]})

    @classmethod
    def create( cls, data ):
        query = ("INSERT INTO recipes (user_id, name, description, instructions, under, date_on, created_at, updated_at) VALUES( %(user_id)s, %(name)s, %(description)s, %(instructions)s, %(under)s, %(date_on)s, NOW(), NOW());")
        results = connectToMySQL('recipes_schema').query_db(query,data)

        return results

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL("recipes_schema").query_db(query)

        all_recipes = []
        
        for row in results:
            all_recipes.append(cls(row))
        return all_recipes

    @classmethod
    def get_one( cls, data ):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL("recipes_schema").query_db(query, data)
        
        return cls(results[0])  #instantiating a Recipe object and returning it

    @classmethod
    def edit(cls,data):
        query = ("UPDATE recipes SET name = %(name)s, description = %(description)s, under = %(under)s, updated_at = NOW() WHERE id = %(id)s);")
        
        return connectToMySQL("recipes_schema").query_db(query,data)
    

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"

        connectToMySQL("recipes_schema").query_db(query,data)


    @staticmethod
    def validator(post_data):
        is_valid = True

        if len(post_data["name"]) < 3:
            flash(" Name must have three characters.")
            is_valid = False

        if len(post_data["description"]) < 3:
            flash(" Description must have three characters.")
            is_valid = False

        if len(post_data["instructions"]) < 3:
            flash(" Instructions must have three characters.")
            is_valid = False

        return is_valid




