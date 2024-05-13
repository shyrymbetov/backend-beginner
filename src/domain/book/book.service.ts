import { dataSource } from "../../data-source";
import { BookEntity } from "./book.entity";
const fs = require("fs");

const bookRepository = dataSource.getRepository(BookEntity);

export async function getBooks(): Promise<BookEntity[]> {
  return await bookRepository.find({ relations: {author: true}});
}

export async function createBook(dto: any) {
  const book = bookRepository.create(dto);
  
  return await bookRepository.save(book);
}

export async function getBookById(id: number) {
  return await bookRepository.findOne({ where: {id}, relations: { author: true} });
}

export async function deleteBook(id: number){
  bookRepository.delete({id: id})
  return "Book deleted successfully"
}

export async function updateBook(id: number, dto: any){
  
 

  if (dto['file'].path) {
    await fs.readFile(dto['file']['path'], 'base64', (err, data) => {
      
      

      try {
        bookRepository.update(id, {
          title: dto.body.title,
          authorId: dto.body.authorId,
          publishedAt: dto.body.publishedAt,
          coverImageBuffer: data,
          coverImageName: dto.file['coverImageName'],
          coverMimeType: dto.file['coverMimeType']
        });
        

      } catch (error) {
        console.error('Error updating book:', error);
      }

    });

    fs.unlink(dto['file'].path, (err) => {
      if (err) throw err;
    });

  }
  
  

}



export async function createBookWithCover(dto: any) {
  const { title, authorId, publishedAt} = dto.body

  if (!dto['file']) {
    return dto.status(400).send('No file uploaded');
  }

  if (dto['file'].path) {
    fs.readFile(dto['file'].path, 'base64', (err, data) => {
      const book = bookRepository.create({
        title: title,
        authorId: authorId,
        publishedAt: publishedAt,
        coverImageBuffer: data,
        coverImageName: dto['file'].filename,
        coverMimeType: dto['file'].mimetype
      });

      bookRepository.save(book);

    });

    fs.unlink(dto['file'].path, (err) => {
      if (err) throw err;
    });

  }
}
