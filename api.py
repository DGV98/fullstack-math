from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from math_response import generate_prompt, get_response, clean_response

app = Flask(__name__, static_folder="my-app/dist")
CORS(app)


@app.route("/api/generate", methods=["GET"])
@cross_origin()
def define_problem():
    category = request.args["category"]
    difficulty = request.args["difficulty"]
    return jsonify(clean_response(get_response(generate_prompt(category, difficulty))))


@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)
