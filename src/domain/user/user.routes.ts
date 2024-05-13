import { Router } from "express";
import { getUsersHandler, createUserHandler, getUserByIdHandler } from "./user.controller";
import { validateRequestMiddleware } from "../../middlewares/validate-request.middleware";
import { CreateUserSchema } from "./create-user.schema";
import { authenticateToken } from '../../middlewares/authorization.middleware'

const router = Router();
router.route("/").get( getUsersHandler).post(validateRequestMiddleware(CreateUserSchema), createUserHandler);
router.route('/:id').get(authenticateToken, getUserByIdHandler);
export default router;
