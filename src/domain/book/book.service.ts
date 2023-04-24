import { dataSource } from "../../data-source";
import { BookEntity } from "./book.entity";

const bookRepository = dataSource.getRepository(BookEntity);

export async function getBooks(): Promise<BookEntity[]> {
  return await bookRepository.find();
}

export async function createBook(dto: any) {
  const book = bookRepository.create(dto);

  return await bookRepository.save(book);
}

export async function getBookById(id: number) {
  return await bookRepository.findOneBy({ id });
}
