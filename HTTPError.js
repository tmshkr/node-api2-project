class HTTPError extends Error {
  constructor(code, message, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError);
    }

    this.name = "HTTPError";
    // Custom debugging information
    this.code = code;
    this.message = message;
    this.date = new Date();
  }
}

module.exports = HTTPError;
