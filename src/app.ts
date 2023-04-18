import DB from "./db";
import userRouter from "./domain/user/user.routes";
import * as express from "express";

DB.getInstance();

const app = express();

app.use(express.json());

app.use("/users/", userRouter);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
