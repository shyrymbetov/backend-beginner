import express, { Request, Response } from "express";

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log(`BACKEND BEGINNER app listening on port 3000`);
});
