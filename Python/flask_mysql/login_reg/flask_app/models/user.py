
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from flask_bcrypt import Bcrypt
from flask_app import app

bcrypt = Bcrypt(app)


class User:

    schema = "login_reg_schema"

    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create( cls, data ):
        query = "INSERT INTO users (first_name,last_name, email, password, created_at, updated_at) VALUES(%(first_name)s, %(last_name)s,%(email)s, %(password)s, NOW(), NOW());"
        result = connectToMySQL('login_reg_schema').query_db(query,data)

        return result


    @classmethod
    def user_one( cls, data ):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("login_reg_schema").query_db(query, data)
        
        return cls(results[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("login_reg_schema").query_db(query)

        users = []
        
        for row in results:
            users.append(cls(row))
        return users

    @classmethod
    def edit(cls,data):
        query = ("UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s);")
        
        return connectToMySQL("login_reg_schema").query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s;"

        connectToMySQL("login_reg_schema").query_db(query)

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)

        if len(results) < 1:
            return False

        return cls(results[0])

    



    @staticmethod
    def validator(post_data):
        is_valid = True

        if len(post_data["first_name"]) < 3:
            flash(" First name must have three characters.")
            is_valid = False

        if len(post_data["last_name"]) < 3:
            flash(" Last name must have three characters.")
            is_valid = False

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        if not EMAIL_REGEX.match(post_data["email"]):
            flash(" invalid email address! ")
            is_valid = False

        elif User.get_by_email({"email" : post_data["email"]}):
            flash("email is already in use")
            is_valid = False
            
        if len(post_data["password"]) < 8:
            flash("Password must be eight characters")
            is_valid = False

        elif post_data["password"] != post_data["confirm_password"]:
            flash (" Password and Confirm Password must match")
            is_valid = False

        return is_valid

    @staticmethod
    def login_validate(post_data):
        user = User.get_by_email({"email": post_data['email']})
        print(user)
        if not user:
            flash("Invalid Credential")
            return False

        if not bcrypt.check_password_hash(user.password, post_data["password"]):
            flash("Invalid Credential")
            return False

        return True

