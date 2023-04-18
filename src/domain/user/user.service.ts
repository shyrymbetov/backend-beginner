import DB from "../../db";
import { UserEntity } from "./user.entity";

const userRepository = DB.getInstance().dataSource.getRepository(UserEntity);

export function getUsers(): Promise<UserEntity[]> {
  console.log("user service");
  return userRepository.find();
}
