import connection from './connection';
import IUser from '../interfaces/User.interface';

class UserModel {
  static async create(user: IUser) {
    const createQuery = 'INSERT INTO Trybesmith.Users (username,'
      + 'classe, level, password) VALUES (?, ?, ?, ?)';
    const [newUser] = await connection
      .execute(createQuery, [user.username, user.classe, user.level, user.password]);

    return newUser as { insertId: number };
  }
}

export default UserModel;
