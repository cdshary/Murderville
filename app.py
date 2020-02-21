from flask import Flask, render_template, redirect
from flask_pymongo import pymongo
import news_scrap

app = Flask(__name__)

# set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/murder"
mongo = PyMongo(app)

url = mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
connection = MongoClient(url)
db = connection['murder']

connection = pymongo.MongoClient('localhost:27017')
db = connection['Murder']
db.authenticate('test2', 'test123')


@app.route("/")
def index():
    news_scrap = murder.find_one()
    return render_template("index.html", news_scrap=news_scrap)
    try:
        murder = db.murder.find_one()
        return render_template("index.html", murder=murder)
    except:
        return redirect("/", code=302)


@app.route("/scrap")
def scraper():

    murder = db.murder
    data = db.murder.scrap()
    murder.update({}, data, upsert=True)
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)