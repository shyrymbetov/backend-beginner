import { Router } from "express";
import { getUsersHandler, createUserHandler } from "./user.controller";

const router = Router();
router.route("/").get(getUsersHandler).post(createUserHandler);
export default router;
