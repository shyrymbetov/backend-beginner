import * as dotenv from "dotenv";
dotenv.config();

import config from "./config";
import { dataSource } from "./data-source";
import userRouter from "./domain/user/user.routes";
import bookRouter from "./domain/book/book.routes";
import * as express from "express";

dataSource
  .initialize()
  .then(() => console.log("successfully connected to DB"))
  .catch((error) => {
    console.error("failed to connect to DB");
    console.error(error);
  });

const app = express();

app.use(express.json());

app.use("/users/", userRouter);
app.use("/books/", bookRouter);

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
