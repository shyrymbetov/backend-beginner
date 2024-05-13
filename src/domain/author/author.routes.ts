import { Router } from "express";
import {
  getAuthorsHandler,
  createAuthorHandler,
  getAuthorByIdHandler,
} from "./author.controller";

import { validateRequestMiddleware } from "../../middlewares/validate-request.middleware";
import { CreateAuthorSchema } from "./create-author.shcema";

const router = Router();
router.route("/").get(getAuthorsHandler).post(validateRequestMiddleware(CreateAuthorSchema) ,createAuthorHandler);
router.route("/:id").get(getAuthorByIdHandler);
export default router;
