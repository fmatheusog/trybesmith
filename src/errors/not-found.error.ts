import AppError from './app.error';

export default class NotFoundError extends AppError {
  constructor(message = 'resource not found') {
    super(404, message);
  }
}
