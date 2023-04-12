import express from "express";
import bookService from "./book.service";
import { checkRequestDto } from "./utils/dto-checker";

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/books", (req, res) => {
  const books = bookService.getAll();
  res.send(books);
});

app.post("/books", (req, res) => {
  const requireds = ["title", "author", "publishedAt"];
  checkRequestDto(req, res, requireds);
  const newBook = bookService.create(req.body);
  return res.send(newBook);
});

app.listen(3000, () => {
  console.log(`BACKEND BEGINNER app listening on port 3000`);
});
