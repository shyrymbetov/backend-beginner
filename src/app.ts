import config from "./config";
import { dataSource } from "./data-source";
import userRouter from "./domain/user/user.routes";
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

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
