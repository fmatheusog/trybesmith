import AppError from './app.error';

export default class BadRequestError extends AppError {
  constructor(message = 'bad request') {
    super(400, message);
  }
}
