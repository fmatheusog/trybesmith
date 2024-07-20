import { SignOptions } from 'jsonwebtoken';

const JwtConfig: SignOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

export default JwtConfig;
