import { Request, Response } from "express";
import { getAuthors, createAuthor, getAuthorById } from "./author.service";

export async function getAuthorsHandler(req: Request, res: Response) {
  return res.send(await getAuthors());
}

export async function createAuthorHandler(req: Request, res: Response) {
  return res.send(await createAuthor(req.body));
}

export async function getAuthorByIdHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send({ message: "id must be a number." });
  }
  const author = await getAuthorById(id);
  if (!author) {
    return res.status(400).send({ message: `Author with id ${id} is not found` });
  }

  return res.send(author);
}
