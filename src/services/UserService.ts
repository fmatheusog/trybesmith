import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';
import IUser from '../interfaces/User.interface';
import UserModel from '../models/UserModel';

class UserService {
  static async create(user: IUser) {
    const newUser = await UserModel.create(user);

    const token = jwt.sign(
      { id: newUser.insertId },
      process.env.JWT_SECRET as Secret,
      jwtConfig as SignOptions,
    );

    return { token };
  }
}

export default UserService;
