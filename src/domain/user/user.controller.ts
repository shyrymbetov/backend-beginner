import { Request, Response } from "express";
import { getUsers, createUser, getUserById } from "./user.service";
import * as bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

export async function getUsersHandler(req: Request, res: Response) {
  return res.send(await getUsers());
}

export async function createUserHandler(req: Request, res: Response) {
  req.body.hashedPassword = await bcrypt.hash(req.body.hashedPassword, 10)
  return res.send(await createUser(req.body));
}

export async function getUserByIdHandler(req: Request, res: Response) {

  const id = Number(jwt.verify(req.headers.authorization!.split(' ')[1], 'my_access_token').id);
  if (isNaN(id)) {
    return res.status(400).send({ message: "id must be a number." });
  }
  const user = await getUserById(id);
  if (!user) {
    return res.status(400).send({ message: `user with id ${id} is not found` });
  }

  
  return res.send(await user);
}
