import * as dotenv from "dotenv";
dotenv.config();
 
import config from "./config";
import { dataSource } from "./data-source";
import userRouter from "./domain/user/user.routes";
import bookRouter from "./domain/book/book.routes";
import authorRouter from "./domain/author/author.routes";
import authRouter from "./domain/auth/auth.routes"
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
app.use("/authors/", authorRouter);
app.use("/auth/", authRouter);


app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
