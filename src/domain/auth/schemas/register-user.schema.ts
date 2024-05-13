import z from 'zod';

export const RegisterUserSchema = z.object({
  body: z
    .object({
      username: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      password: z.string(),
    })
    .strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict(),
});
