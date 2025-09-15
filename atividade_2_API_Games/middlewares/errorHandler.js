const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = 500;
  let message = 'Erro interno do servidor.';

  // Erro de validação do Mongoose
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  }

  // Erro de ID inválido
  if (err.name === 'InvalidIdError') {
    statusCode = 400;
    message = 'ID fornecido é inválido.';
  }

  res.status(statusCode).json({
    status: 'error',
    message: message
  });
};

module.exports = errorHandler;
