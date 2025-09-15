const mongoose = require('mongoose');
const Game = require('../models/game');

// Função para lidar com erros e retornar uma resposta padronizada
const handleResponse = (res, status, data) => res.status(status).json(data);

// Middleware de validação de ID (para rotas que usam :id)
const validateId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('ID inválido.');
    error.name = 'InvalidIdError';
    throw error;
  }
};

// 1. Criar um novo jogo
exports.createGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    const savedGame = await newGame.save();
    handleResponse(res, 201, savedGame);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const error = new Error('Erro de validação: ' + err.message);
      error.name = 'ValidationError';
      return next(error);
    }
    next(err);
  }
};

// 2. Listar todos os jogos
exports.getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    handleResponse(res, 200, games);
  } catch (err) {
    next(err);
  }
};

// 3. Visualizar um jogo por ID
exports.getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateId(id);
    const game = await Game.findById(id);

    if (!game) {
      return handleResponse(res, 404, { message: 'Jogo não encontrado.' });
    }
    handleResponse(res, 200, game);
  } catch (err) {
    next(err);
  }
};

// 4. Atualizar um jogo
exports.updateGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateId(id);
    const updatedGame = await Game.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedGame) {
      return handleResponse(res, 404, { message: 'Jogo não encontrado para atualização.' });
    }
    handleResponse(res, 200, updatedGame);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const error = new Error('Erro de validação: ' + err.message);
      error.name = 'ValidationError';
      return next(error);
    }
    next(err);
  }
};

// 5. Deletar um jogo
exports.deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateId(id);
    const deletedGame = await Game.findByIdAndDelete(id);

    if (!deletedGame) {
      return handleResponse(res, 404, { message: 'Jogo não encontrado para exclusão.' });
    }
    handleResponse(res, 200, { message: 'Jogo deletado com sucesso!' });
  } catch (err) {
    next(err);
  }
};
