from flask_app import app

from flask_app.controllers import tables_controllers


@ap.route("/")
def indes():
    return render_template("index.html")

    
if __name__ == "__main__":
    app.run(debug = True, port = 5001)