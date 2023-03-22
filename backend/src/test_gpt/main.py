import functions_framework
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")


@functions_framework.http
def chatbot(request):
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    headers = {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
        }
    try:
        print(request.get_json())
        print(request)
        request_json = request.get_json()
        messages = request_json['messages']

        response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
        )
        return (response['choices'][0]['message'], 200, headers)
    except Exception as e:
        print(request)
        print(e)
        return (str(e), 400, headers)
