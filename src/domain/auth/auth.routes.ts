import { Router } from "express";
import { loginUserHandler, registerUserHandler } from './auth.controller';
import { authenticateToken } from '../../middlewares/authorization.middleware'


const router = Router();
router.route('/register').post(registerUserHandler);
router.route('/login').post(loginUserHandler);
router.route('/is-authorized').get(authenticateToken, (req, res) => {
    res.send({'status': 'success'})
})

export default router;