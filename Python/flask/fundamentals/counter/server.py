from typing import Counter
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secret key"

@app.route('/')

def visit_counter():
    if "counter" not in session:
        session["counter"] = 1
    else:
        session["counter"] += 1 
    return render_template("index.html")

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')



if __name__=="__main__":
    app.run(debug= True, port = 5001)
