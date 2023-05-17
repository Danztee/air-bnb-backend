const error = (message, statusCode) => {
  const error = new Error(`Error: ${message}`);
  error.statusCode = statusCode;
  throw error;
};

module.exports = error;
