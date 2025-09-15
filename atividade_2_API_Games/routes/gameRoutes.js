const express = require('express');
const router = express.Router();
const {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame
} = require('../controllers/gameController');

// Rotas CRUD
router.post('/', createGame); // Criar
router.get('/', getAllGames); // Listar todos
router.get('/:id', getGameById); // Visualizar por ID
router.put('/:id', updateGame); // Atualizar
router.delete('/:id', deleteGame); // Deletar

module.exports = router;
