import { Request, Response } from "express";
import { registerUser, loginUser} from "./auth.service";
import { RegisterUserSchema } from './schemas/register-user.schema';
import { LoginUserSchema } from './schemas/login-user.schema';

export async function registerUserHandler(req: Request, res: Response) {
  const { body } = RegisterUserSchema.parse(req);
  return res.send(await registerUser(body));
}

export async function loginUserHandler(req: Request, res: Response){
  const { body } = LoginUserSchema.parse(req);
  return res.send(await loginUser(body));
}