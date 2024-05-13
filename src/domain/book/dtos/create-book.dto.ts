import z from 'zod';
import { CreateBookSchema } from '../schemas/create-book.schema';

export type CreateBookDto = z.infer<typeof CreateBookSchema>['body'];
