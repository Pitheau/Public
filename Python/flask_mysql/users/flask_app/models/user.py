
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name,last_name, email, created_at, updated_at) VALUES(%(first_name)s, %(last_name)s,%(email)s, NOW(), NOW());"
        print(data)
        return connectToMySQL('Users_db').query_db(query,data)

    @classmethod
    def user_one(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("Users_db").query_db(query, data)
        
        return cls(results[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("Users_db").query_db(query)

        users = []
        
        for row in results:
            users.append(cls(row))
        return users

    @classmethod
    def edit(cls,data):
        query = ("UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s);")
        
        return connectToMySQL("Users_db").query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s;"

        connectToMySQL("Useres_bd").query_db(query)
