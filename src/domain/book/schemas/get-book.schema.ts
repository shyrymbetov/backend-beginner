import z from 'zod';

export const GetBookSchema = z.object({
    body: z.object({}).strict(),
    params: z
        .object({
            id: z.preprocess(
                (a) => parseInt(z.string().parse(a), 10),
                z.number().positive().min(1)
            ),
        })
        .strict(),
    query: z.object({}).strict(),
});
