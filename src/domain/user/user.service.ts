import { dataSource } from "../../data-source";
import { CreateUserDto } from "./create-user.schema";
import { UserEntity } from "./user.entity";

const userRepository = dataSource.getRepository(UserEntity);

export async function getUsers(): Promise<UserEntity[]> {
  return await userRepository.find();
}

export async function createUser(dto: CreateUserDto) {
  
  const user = userRepository.create(dto);

  return await userRepository.save(user);
}

export async function getUserByUsername(
    username: string
): Promise<UserEntity | null> {
  return await userRepository.findOneBy({ username });
}

export async function getUserById(id: number): Promise<UserEntity | null> {
  return await userRepository.findOneBy({ id });
}