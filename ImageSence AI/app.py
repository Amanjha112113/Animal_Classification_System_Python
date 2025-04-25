from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='static')
CORS(app)

@app.route('/')
def index():
    return render_template('tfjs.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)

