import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/User.interface';

const validateUsername = (username: string) => {
  if (!username) {
    return {
      code: 400, message: '"username" is required',
    };
  }
  if (typeof username !== 'string') {
    return {
      code: 422, message: '"username" must be a string',
    };
  }
  if (username.length < 3) {
    return {
      code: 422, message: '"username" length must be at least 3 characters long',
    };
  }

  return true;
};

const validateClasse = (classe: string) => {
  if (!classe) {
    return {
      code: 400, message: '"classe" is required',
    };
  }
  if (typeof classe !== 'string') {
    return {
      code: 422, message: '"classe" must be a string',
    };
  }
  if (classe.length < 3) {
    return {
      code: 422, message: '"classe" length must be at least 3 characters long',
    };
  }

  return true;
};

const validateLevel = (level: number) => {
  if (level < 1) {
    return {
      code: 422, message: '"level" must be greater than or equal to 1',
    };
  }
  if (!level) {
    return {
      code: 400, message: '"level" is required',
    };
  }
  if (typeof level !== 'number') {
    return {
      code: 422, message: '"level" must be a number',
    };
  }

  return true;
};

const validatePassword = (password: string) => {
  if (!password) {
    return {
      code: 400, message: '"password" is required',
    };
  }
  if (typeof password !== 'string') {
    return {
      code: 422, message: '"password" must be a string',
    };
  }
  if (password.length < 8) {
    return {
      code: 422, message: '"password" length must be at least 8 characters long',
    };
  }

  return true;
};

const validateUser = (user: IUser) => {
  if (validateUsername(user.username) !== true) return validateUsername(user.username);
  if (validateClasse(user.classe) !== true) return validateClasse(user.classe);
  if (validateLevel(user.level) !== true) return validateLevel(user.level);
  if (validatePassword(user.password) !== true) return validatePassword(user.password);

  return true;
};

const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const userValidation = validateUser({ username, classe, level, password });
  if (userValidation !== true) {
    return res.status(userValidation.code).json({ message: userValidation.message });
  }

  next();
};

export default validateCreateUser;
