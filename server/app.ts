import express from "express";
import dotenv from 'dotenv';
import cors from "cors";

import { OpenAI } from "langchain/llms/openai";
import { APIChain } from "langchain/chains";

import { NBA_TEAMS_DOCS } from "./api_docs/NbaTeamsDocs"

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const app = express();
const port = 5600;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.send('Hello from Express server')
})

app.post('/', async (req, res) => {
  const { query } = req.body; 

  const model = new OpenAI({openAIApiKey: OPENAI_API_KEY, modelName: "text-davinci-003", temperature: 0});
  const chain = APIChain.fromLLMAndAPIDocs(model, NBA_TEAMS_DOCS);
  
  const response = await chain.call({ question: query });
  res.send(response);

  console.log(response)
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
