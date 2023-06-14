import os
import requests
import openai
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )

openai.api_key = os.environ["OPENAI_API_KEY"]

class Prompt(BaseModel):
    prompt: str

def get_data_from_api():
    response = requests.get("https://data.calgary.ca/resource/35ra-9556.json")
    data = response.json()
    return data

@app.get("/")
async def root():
    data = get_data_from_api()
    return data

@app.post("/")
async def answer(prompt: Prompt):
    data = get_data_from_api()
    response = openai.Completion.create(
        engine="davinci",
        prompt=f"{prompt.prompt} {data}",
        temperature=0,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return response["choices"][0]["text"]
