from flask import render_template, redirect, request, session

from flask_app.templates import app

@app.route('/')      
def dojo():
    return render_template("flask_app.templates.dojo.html")



if __name__=="__main__":
    app.run(debug=True, port = 5001)   

