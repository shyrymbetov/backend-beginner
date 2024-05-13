import z from "zod"


export const CreateAuthorSchema = z
    .object({
        name: z.string(),
        surname: z.string()
    })
    .strict();

export type CreateAuthorDto = z.infer<typeof CreateAuthorSchema>;