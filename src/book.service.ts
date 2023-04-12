import db from "./db";
import BookEntity from "./entities/book.entity";

export function getAll() {
  return db.books;
}

export function create(dto: any) {
  const newBook: BookEntity = {
    id: db.books.length + 1,
    title: dto.title,
    author: dto.author,
    publishedAt: new Date(dto.publishedAt),
    createAt: new Date(),
  };
  db.books.push(newBook);
  return newBook;
}

export default {
  getAll,
  create,
};
