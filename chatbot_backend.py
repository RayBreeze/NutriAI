import os
from azure.ai.inference import ChatCompletionsClient
from azure.ai.inference.models import SystemMessage, UserMessage
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv
load_dotenv()
endpoint = "https://models.inference.ai.azure.com"
model_name = "gpt-4o"
token = os.getenv("GITHUB_TOKEN")

client = ChatCompletionsClient(
    endpoint=endpoint,
    credential=AzureKeyCredential(token),
)

response = client.complete(
    messages=[
        SystemMessage(content="Your name is NutriAI. An AI based Nutritionist who will response only on nutritional based queries. Any other query will not be treated..."),
        UserMessage(content="What is the nutritional value of an apple?"),
    ],
    temperature=1.0,
    top_p=1.0,
    max_tokens=1000,
    model=model_name
)

print(response.choices[0].message.content)