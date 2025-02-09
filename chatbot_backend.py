import os
import importlib.util

if importlib.util.find_spec("azure.ai.inference") is None:
    os.system("pip install azure-ai-inference")
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
def get_nutrition_response(user_prompt):
    response = client.complete(
        messages=[
            SystemMessage(content="Your name is NutriAI. An AI based Nutritionist who will response only on nutritional based queries. Be happy and Cheerful. Any other query will not be treated..."),
            UserMessage(content=user_prompt),
        ],
        temperature=1.0,
        top_p=1.0,
        max_tokens=1000,
        model=model_name
    )

    return response.choices[0].message.content