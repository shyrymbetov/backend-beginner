import { Router } from "express";
import { getUsersHandler, createUserHandler } from "./user.controller";
import { validateRequestMiddleware } from "../../middlewares/validate-request.middleware";
import { CreateUserSchema } from "./create-user.schema";

const router = Router();
router
  .route("/")
  .get(getUsersHandler)
  .post(validateRequestMiddleware(CreateUserSchema), createUserHandler);
export default router;
