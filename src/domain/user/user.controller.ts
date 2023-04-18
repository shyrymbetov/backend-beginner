import { Request, Response } from "express";
import { getUsers } from "./user.service";

export async function getUsersHandler(req: Request, res: Response) {
  return res.send(getUsers());
}
