import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateCreateUser from '../middlewares/validateCreateUser';

const UserRoutes = Router();

UserRoutes.post('/', validateCreateUser, UserController.create);

export default UserRoutes;
