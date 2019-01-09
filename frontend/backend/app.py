from flask import Flask, jsonify
from dbconnect.dbconnect import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    rates = select_all()
    rates_json = list()

    for rate in rates:
        c = {'cid': rate[0], 'company': rate[1], 'one': rate[2], 'two': rate[3],
             'three': rate[4], 'four': rate[5], 'five': rate[6]}
        rates_json.append(c)

    return jsonify(rates_json)



if __name__ == '__main__':
    app.run()
