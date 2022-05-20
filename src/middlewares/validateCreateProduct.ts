import { NextFunction, Request, Response } from 'express';

const validateName = (name: string) => {
  if (!name) {
    return {
      code: 400, message: '"name" is required',
    };
  }
  if (typeof name !== 'string') {
    return {
      code: 422, message: '"name" must be a string',
    };
  }
  if (name.length < 3) {
    return {
      code: 422, message: '"name" length must be at least 3 characters long',
    };
  }

  return true;
};

const validateAmount = (amount: string) => {
  if (!amount) {
    return {
      code: 400, message: '"amount" is required',
    };
  }
  if (typeof amount !== 'string') {
    return {
      code: 422, message: '"amount" must be a string',
    };
  }
  if (amount.length < 3) {
    return {
      code: 422, message: '"amount" length must be at least 3 characters long',
    };
  }

  return true;
};

const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const validName = validateName(name);
  if (validName !== true) {
    return res.status(validName.code).json({
      message: validName.message,
    });
  }
  const validAmount = validateAmount(amount);
  if (validAmount !== true) {
    return res.status(validAmount.code).json({
      message: validAmount.message,
    });
  }

  next();
};

export default validateCreateProduct;
