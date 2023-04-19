import { dataSource } from "../../data-source";
import { UserEntity } from "./user.entity";

const userRepository = dataSource.getRepository(UserEntity);

export async function getUsers(): Promise<UserEntity[]> {
  return await userRepository.find();
}

export async function createUser(dto: any) {
  const user = userRepository.create(dto);

  return await userRepository.save(user);
}
