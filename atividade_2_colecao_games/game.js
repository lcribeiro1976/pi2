const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  dataLancamento: {
    type: Date,
    required: true
  },
  produtora: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);
