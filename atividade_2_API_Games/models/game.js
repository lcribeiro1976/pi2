const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  título: {
    type: String,
    required: [true, 'O título é obrigatório.']
  },
  genero: {
    type: String,
    required: [true, 'O gênero é obrigatório.']
  },
  plataforma: {
    type: String,
    required: [true, 'A plataforma é obrigatória.']
  },
  lancamento: {
    type: Number,
    required: [true, 'O ano de lançamento é obrigatório.']
  }
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
