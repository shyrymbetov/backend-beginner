import { Request, Response } from "express";

// TODO: add optional fields checking
export function checkRequestDto(
  req: Request,
  res: Response,
  requireds: string[]
) {
  const keys = Object.keys(req.body);
  const existingRequireds = keys.filter((key) => requireds.includes(key));
  if (existingRequireds.length !== requireds.length) {
    return res.status(400).send({ message: "Missing some required fields" });
  }
  const existingExtras = keys.filter((key) => !requireds.includes(key));
  if (existingExtras.length) {
    return res.status(400).send({ message: "Some keys are unnecessary" });
  }
}
