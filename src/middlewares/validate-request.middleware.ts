import { NextFunction, Request, Response } from "express";
import z from "zod";

export function validateRequestMiddleware(schema: z.AnyZodObject) {
  return function validateRequest(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).send({ error: result.error });
    }
    req.body = result.data;
    return next();
    return res.status(500).send({ message: "Not implemented" });
  };
}
