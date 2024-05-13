import { Request, Response } from "express";
import { getBooks, createBook, getBookById, deleteBook, updateBook, createBookWithCover } from "./book.service";
import { CreateBookSchema } from './schemas/create-book.schema';
import { CreateBookWithCoverSchema } from './schemas/create-book-with-cover.schema';
import { UpdateBookSchema } from './schemas/update-book.schema';
import { GetBookSchema } from './schemas/get-book.schema';


// Test below
import { dataSource } from "../../data-source";
import { BookEntity } from "./book.entity";


const bookRepository = dataSource.getRepository(BookEntity);
// Test above

export async function getBooksHandler(req: Request, res: Response) {
  return res.send(await getBooks());
}

export async function createBookHandler(req: Request, res: Response) {
  const { body } = CreateBookSchema.parse(req);
  console.log(req.body)
  return res.send(await createBook(body));
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

export async function deleteBookByIdHandler(req: Request, res: Response) {
  var id = Number(req.params.id);

  deleteBook(id)
  return res.send("Book deleted successfully")
}

export async function updateBookByIdHandler(req: Request, res: Response) {
  // console.log(req['file'])
  var id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ message: "id must be a number." });
  }

  const book = await getBookById(id);
  if (!book) {
    return res.status(400).send({ message: `book with id ${id} is not found` });
  }

  req.body.authorId = Number(req.body.authorId)
  const { body } = UpdateBookSchema.parse(req);
  if (req['file'] == null) {
    return res.send({'status' : 'failure', 'message': 'No image sended'})
  }
  
  

  updateBook(id, req)
  res.send("Book updated successfully")
}


export async function addBookCoverHandler(req: Request, res: Response){
  console.log(req.params.file);
  res.send({"text":"File uploaded succesfully"})
}

export async function createBookWithCoverHandler(req: Request, res: Response){
  req.body.authorId = Number(req.body.authorId)
  const { body } = CreateBookWithCoverSchema.parse(req);
  if (req['file'] == null) {
    return res.send({'status' : 'failure', 'message': 'No image sended'})
  }
  createBookWithCover(req)
  res.send({'status':'success', 'message':"Book saved!"})
}

export async function getBookCoverByIdHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send({ message: "id must be a number." });
  }
  const book = await getBookById(id);
  if (!book) {
    return res.status(400).send({ message: `book with id ${id} is not found` });
  }

  var img = Buffer.from(Buffer.from(book.coverImageBuffer, 'base64'));

  res.writeHead(200, {
    'Content-Type': book.coverMimeType,
    'Content-Length': book.coverImageBuffer.length
  });
  res.end(img);
  
}
