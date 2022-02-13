class ErrorHandler extends Error {
  public status: number | string;

  constructor(message: string, status: number|string) {
    super(message);
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
