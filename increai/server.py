import os
from flask import Flask, send_from_directory


STATIC_FOLDER = os.path.join(os.path.dirname(__file__), 'ui', 'build')
app = Flask(__name__, static_folder=STATIC_FOLDER)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


def main():
    app.run(use_reloader=True, port=5000, threaded=True)


if __name__ == '__main__':
    main()