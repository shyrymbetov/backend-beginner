import { Router } from "express";
import { getUsersHandler } from "./user.controller";

const router = Router();
router.route("/").get(getUsersHandler);

export default router;
