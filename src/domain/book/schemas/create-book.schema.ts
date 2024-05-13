import z from 'zod';

export const CreateBookSchema = z.object({
    body: z
        .object({
            title: z.string(),
            authorId: z.number(),
            publishedAt: z.string().datetime(),
        })
        .strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
});

