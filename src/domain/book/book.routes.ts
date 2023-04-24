import { Router } from "express";
import {
  getBooksHandler,
  createBookHandler,
  getBookByIdHandler,
} from "./book.controller";

const router = Router();
router.route("/").get(getBooksHandler).post(createBookHandler);
router.route("/:id").get(getBookByIdHandler);
export default router;
