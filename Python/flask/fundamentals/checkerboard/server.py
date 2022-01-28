import numbers
from flask import Flask , render_template
app = Flask(__name__)

@app.route('/')
def checkerboard():
    return render_template( "index.html", x = 2, y = 2)

@app.route('/<int:x>/<int:y>')
def adjustable(x,y):
    x= int(x/2)
    y= int(y/2)
    return render_template("index.html", x=x, y=y)

if __name__=="__main__":
    app.run(debug=True, port = 5001)
