import { UserRoleEnum } from '../domain/user/types/user-role.enum';
import { UserEntity } from '../domain/user/user.entity';
import { dataSource } from '../data-source';
const jwt = require('jsonwebtoken');

export async function hasAdminRole(req, res, next) {

    const authHeader = req.headers['authorization']; //Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.json({error: "Null token"});

    
    jwt.verify(token, 'my_access_token', async (error, user) => {
        if (error) return res.json({error: error.message});
        req.user = user;

        const userId = user.id;

        const userRepository = dataSource.getRepository(UserEntity);
        const userData = await userRepository.findOneBy({id: userId})

        if (!user) {
            res.send('No such user exists');
        }

        if (userData!.role !== "admin") {
            res.send(`User must have Admin role`);
        }

        next();
    });
}



