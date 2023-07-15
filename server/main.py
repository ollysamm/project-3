import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from langchain.llms import OpenAI
from langchain.agents import create_csv_agent

load_dotenv()

OPENAI_API_KEY=os.environ["OPENAI_API_KEY"]

# Get a list of all the CSV files in the source_data folder
source_data_folder = "source_data"
csv_files = [f"./{source_data_folder}/{f}" for f in os.listdir(source_data_folder) if f.endswith(".csv")]

# Initialize the CSV agent with the list of CSV files
agent = create_csv_agent(
    OpenAI(temperature=0),
    csv_files,
    verbose=True,
)

# Define the request model
class PromptQuery(BaseModel):
    prompt: str

# Create the FastAPI app
app=FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )

# Define Server routes
@app.get('/test')
def read_root():
    return {"Hello": "world"}

@app.post('/ask-wendy')
def ask_wendy(query: PromptQuery):
    prompt = query.prompt
    try:
        response=agent.run(prompt)
        return response
    except Exception as e:
        error_message = "I am unable to respond to your question at the moment, please try again later."
        return error_message