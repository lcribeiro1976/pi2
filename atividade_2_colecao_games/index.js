const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

console.log('Tentando conectar ao MongoDB...');
console.log('URI:', process.env.MONGODB_URI ? 'Carregada' : 'NÃO ENCONTRADA');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.listen(3000, () => {
      console.log('✅ Servidor rodando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar:', err.message);
  });
console.log('Todas as variáveis:', process.env.MONGODB_URI, process.env.PORT);

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log('MongoDB URI:', process.env.MONGODB_URI);
console.log('Diretório atual:', __dirname);
