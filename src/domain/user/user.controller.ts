import { Request, Response } from "express";
import { getUsers, createUser } from "./user.service";

export async function getUsersHandler(req: Request, res: Response) {
  return res.send(await getUsers());
}

export async function createUserHandler(req: Request, res: Response) {
  return res.send(await createUser(req.body));
}
