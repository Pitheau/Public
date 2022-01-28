from crypt import methods
from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = "secret key"

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def create_user():
    if not User.validate__survery(request.form):
        return redirect('/')
    Users.save(request.form)
    return redirect("/")
    
    session["name"] = request.form["name"]
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect("/show")

@app.route('/show')
def show():
    return render_template("result.html")


@staticmethod
def validate_survey(survey):
    is_survey = True # we assume this is true

    if len(survey['name']) < 3:
        flash("Name must be at least 3 characters.")
        is_valid = False
    if len(survey['location']) < 3:
        flash("Bun must be at least 3 characters.")
        is_valid = False
    if len(survey['comment']) < 200:
        flash("Calories must be 200 or greater.")
        is_valid = False

        return is_valid




if __name__=="__main__":
    app.run(debug = True, port = 5001)