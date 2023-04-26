import z from "zod";

export const CreateUserSchema = z
  .object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
  })
  .strict();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
