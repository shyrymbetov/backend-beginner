import z from 'zod';

export const UpdateBookSchema = z.object({
    body: z
        .object({
            title: z.string(),
            authorId: z.number(),
            publishedAt: z.string().datetime(),
        })
    // .strict(),
    ,
    // params: z.object({
    //     id: z.number()
    // }).strict(),
    query: z.object({}).strict(),

});


