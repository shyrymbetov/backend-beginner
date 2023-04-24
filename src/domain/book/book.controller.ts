import { Request, Response } from "express";
import { getBooks, createBook, getBookById } from "./book.service";

export async function getBooksHandler(req: Request, res: Response) {
  return res.send(await getBooks());
}

export async function createBookHandler(req: Request, res: Response) {
  return res.send(await createBook(req.body));
}

export async function getBookByIdHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send({ message: "id must be a number." });
  }
  const book = await getBookById(id);
  if (!book) {
    return res.status(400).send({ message: `book with id ${id} is not found` });
  }

  return res.send(book);
}
