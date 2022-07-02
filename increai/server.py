import os
from flask import Flask, send_from_directory


STATIC_FOLDER = os.path.join(os.path.dirname(__file__), 'ui', 'build')
app = Flask(__name__, static_folder=STATIC_FOLDER)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
# @app.route('/')
# def serve():
    return send_from_directory(app.static_folder, 'index.html')


def main():
    app.run(use_reloader=True, port=5000, threaded=True)


if __name__ == '__main__':
    main()