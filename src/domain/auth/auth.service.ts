import { createUser } from "../user/user.service";
import { RegisterUserDto } from './dtos/register-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import * as bcrypt from 'bcrypt';
import {jwtTokens} from '../../utils/jwt-helpers'
import { UserEntity } from './../user/user.entity';
import { dataSource } from '../../data-source';


export async function registerUser(userDto: RegisterUserDto) {

  const hashedPwd = await bcrypt.hash(userDto.password, 10)

  const user = await createUser({
    username: userDto.username,
    firstName: userDto.firstName,
    lastName: userDto.lastName,
    hashedPassword: hashedPwd,
  });

  await createUser(user);



  const tokens = jwtTokens({id: user.id})
  tokens['user'] = {
    'username': userDto!.username,
    'role': user!.role,
    'firstName': user!.firstName,
    'lastName': user!.lastName,
  }

  return tokens
}



const userRepository = dataSource.getRepository(UserEntity);


export async function loginUser(userDto: LoginUserDto) {
  const username = userDto.username;
  const password = userDto.password;
  // const rawData = await userRepository.query(`SELECT * FROM user_entity`)
  const user = await userRepository.findOneBy({ username: username })
  const isUserExist = await userRepository.exist({ where: { username: username } })
  if (isUserExist){
    const validPassword = await bcrypt.compare(password, user!.hashedPassword);
    if (validPassword){

      const tokens = jwtTokens(user!.id)
      tokens['user'] = {
        'username': username,
        'role': user!.role,
        'firstName': user!.firstName,
        'lastName': user!.lastName,
      }

      return tokens
    } else {
      return  {
        "status":"error",
        "message": "Incorrect password"
      }
    }
  } else {
    return {
      "status":"error",
      "message": "No user with this username"
    }
    
  }
}





