import z from 'zod';

export const LoginUserSchema = z.object({
  body: z.object({ username: z.string(), password: z.string() }).strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict(),
});
