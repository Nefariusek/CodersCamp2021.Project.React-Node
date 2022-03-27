class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

//function wrapping http request to catch errors
export function catchAsync(fn) {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
}

export default ExpressError;
