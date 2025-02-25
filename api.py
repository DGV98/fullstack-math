from flask import Flask, jsonify, request, abort
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from math_response import generate_prompt, get_response, clean_response
from supabase import create_client, Client
import os

app = Flask(__name__, static_folder="math_frontend/dist", static_url_path="")
CORS(app)

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)


@app.route("/api/generate", methods=["GET"])
@cross_origin()
def define_problem():
    category = request.args["category"]
    difficulty = request.args["difficulty"]
    return jsonify(clean_response(get_response(generate_prompt(category, difficulty))))


@app.route("/auth/register", methods=["POST"])
@cross_origin()
def register_user():
    email = request.json.get('email')
    password = request.json.get('password')
    # Create a new user
    try:
        response = supabase.auth.sign_up({
            "email": email,
            "password": password
        })
        return jsonify({'data': 'Success', 'error': None})
    except Exception as e:
        print(f"Error creating user: {e}")
        return jsonify({'data': None, 'error': f'Error Creating User: {e}'})


@app.route("/auth/login", methods=["POST"])
@cross_origin()
def login_user():
    email = request.json.get('email')
    password = request.json.get('password')
    # Create a new user
    try:
        response = supabase.auth.sign_in_with_password({
            "email": email,
            "password": password
        })
        print(f"Type: {type(response)}")
        print(response)
        return jsonify({'data': 'success'})
    except Exception as e:
        print(f"Error creating user: {e}")
        return jsonify({'data': None, 'error': f'Error Logging In: {e}'})


@app.route("/auth/update_user")
@cross_origin()
def update_user():
    pass


@app.route("/api/add_question")
@cross_origin()
def add_question():
    pass


@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)
