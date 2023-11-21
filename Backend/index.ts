import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { fetchData } from "./routes/fetchData.ts";
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(fetchData);
app.listen(8000, () => {
  console.log("Listening on 8000");
});

export const handler = serverless(app);
