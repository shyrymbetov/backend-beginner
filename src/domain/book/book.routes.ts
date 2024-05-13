import { Router } from "express";
import {
  getBooksHandler,
  createBookHandler,
  getBookByIdHandler,
  deleteBookByIdHandler,
  createBookWithCoverHandler,
  getBookCoverByIdHandler,
  updateBookByIdHandler
} from "./book.controller";
import {authenticateToken} from "../../middlewares/authorization.middleware"
import { validateRequestMiddleware } from "../../middlewares/validate-request.middleware";
import { CreateBookSchema } from "./schemas/create-book.schema";
import { hasAdminRole } from '../../middlewares/is-admin.middleware';
import * as multer from "multer"

const router = Router();
router.route('/').get(authenticateToken, getBooksHandler);
router.route('/:id').get(getBookByIdHandler);
router.route("/").post(validateRequestMiddleware(CreateBookSchema), createBookHandler)
router.route("/delete/:id").delete(deleteBookByIdHandler)
router.route("/edit/:id").put(multer({dest: 'uploads'}).single('image'), updateBookByIdHandler)
router.route("/book-with-cover").post(multer({dest: 'uploads'}).single('image'), createBookWithCoverHandler);
router.route("/:id/cover").get(getBookCoverByIdHandler)

export default router;
