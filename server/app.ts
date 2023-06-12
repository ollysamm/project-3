import express from "express";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents";
import { DataSource } from "typeorm";

const app = express();
const port = 5600;

app.get("/api/query", async (req, res) => {
  const datasource = new DataSource({
    type: "mysql",
    host: "your_host",
    port: 8600,
    username: "your_username",
    password: "your_password",
    database: "your_database",
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const model = new OpenAI({ temperature: 0 });
  const toolkit = new SqlToolkit(db, model);
  const executor = createSqlAgent(model, toolkit);

  const input = req.query.input as string;
  const result = await executor.call({ input });

  await datasource.destroy();

  res.json(result.output);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
