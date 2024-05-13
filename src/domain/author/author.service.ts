import { dataSource } from "../../data-source";
import { AuthorEntity } from "./author.entity";

const authorRepository = dataSource.getRepository(AuthorEntity);

export async function getAuthors(): Promise<AuthorEntity[]> {
  return await authorRepository.find();
}

export async function createAuthor(dto: any) {
  const author = authorRepository.create(dto);

  return await authorRepository.save(author);
}

export async function getAuthorById(id: number) {
  return await authorRepository.findOneBy({ id });
}
