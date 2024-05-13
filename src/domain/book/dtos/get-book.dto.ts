import z from 'zod';
import { GetBookSchema } from '../schemas/get-book.schema';

export type GetBookDto = z.infer<typeof GetBookSchema>['params'];
