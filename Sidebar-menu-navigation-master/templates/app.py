from flask import Flask, render_template, request
import pyttsx3
import openai
app = Flask(__name__)
# Set up OpenAI API credentials
openai.api_key = "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"
# Define the default route to return the index.html file
@app.route("/")
def index():
    return render_template("index.html")
# Define the /api route to handle POST requests
@app.route("/api", methods=["POST"])
def api():
    # Get the message from the POST request
    message = request.json.get("message")
    message=message
    # Send the message to OpenAI's API and receive the response
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": message}]
    )
    text = pyttsx3.init()
    if completion.choices[0].message!=None:
        x=completion.choices[0].message
        return x
    else :
        return 'Failed to Generate response!'
if __name__=='__main__':
    app.run()

