import AppError from './app.error';

export default class InternalError extends AppError {
  constructor(message = 'internal server error') {
    super(500, message);
  }
}
