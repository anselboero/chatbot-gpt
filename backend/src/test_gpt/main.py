import functions_framework
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")


@functions_framework.http
def hello(request):
    request_json = request.get_json()
    messages = request_json['messages']

    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=messages
    )

    return response['choices'][0]['message']
