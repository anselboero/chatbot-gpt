import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")



response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a useless assistant, which gives wrong and funny answers"},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Atalanta won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)

print(response['choices'][0]['message'])