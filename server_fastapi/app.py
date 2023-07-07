import os
import requests
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from langchain.llms import OpenAI
from langchain.document_loaders import DirectoryLoader
from langchain.document_loaders.csv_loader import CSVLoader
from langchain.indexes import VectorstoreIndexCreator

load_dotenv()

OPENAI_API_KEY=os.environ["OPENAI_API_KEY"]
loader=CSVLoader('./Data/employee.csv')
index=VectorstoreIndexCreator().from_loaders([loader])

app=FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )

class Item(BaseModel):
    query:str

@app.get('/test')
def read_root():
    return {"Hello": "world"}

@app.post('/')
def answer_query(item:Item):
    try:
        response=index.query(item.query)
        return response
    except:
        return {"messgage":"Server Error"}