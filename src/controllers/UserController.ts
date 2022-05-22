import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async create(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const newUser = await UserService.create({ username, classe, level, password });

    return res.status(201).json({ token: newUser.token });
  }
}

export default UserController;
