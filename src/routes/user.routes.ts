import { Router } from 'express';
import { createUser, login } from '../controllers/user.controller';

const UserRoutes = Router();

UserRoutes.post('/', createUser);
UserRoutes.post('/auth', login);

export default UserRoutes;
