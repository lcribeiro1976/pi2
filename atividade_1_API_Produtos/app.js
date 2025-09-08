const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Simula um banco de dados em memória
let products = [
  { "id": 1, "nome": "Notebook", "preco": 5000 },
  { "id": 2, "nome": "Mouse Gamer", "preco": 250 },
  { "id": 3, "nome": "Teclado Mecânico", "preco": 400 },
  { "id": 4, "nome": "Cadeira Gamer", "preco": 1200 },
  { "id": 5, "nome": "Monitor 4K", "preco": 3000}
];

// Rota POST /produtos
// Adiciona um novo produto
app.post('/produtos', (req, res) => {
  const { id, nome, preco } = req.body;

  // Validação dos dados
  if (typeof id !== 'number' || typeof nome !== 'string' || typeof preco !== 'number') {
    return res.status(400).json({ mensagem: "Dados inválidos. 'id' deve ser numérico, 'nome' e 'preco' devem ser fornecidos." });
  }

  // Validação: ID deve ser único
  const produtoExistente = products.find(p => p.id === id);
  if (produtoExistente) {
    return res.status(409).json({ mensagem: "Conflito: Já existe um produto com este ID." });
  }
  
  const novoProduto = { id, nome, preco };
  products.push(novoProduto);
  
  res.status(201).json(novoProduto); // 201 Created
});

// Rota GET /produtos
// Retorna todos os produtos
app.get('/produtos', (req, res) => {
  res.status(200).json(products);
});

// Rota GET /produtos/:id
// Retorna um único produto pelo ID
app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = products.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado." }); // 404 Not Found
  }
  
  res.status(200).json(produto);
});

// Rota PUT /produtos/:id
// Atualiza todos os campos de um produto
app.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, preco } = req.body;
  const produtoIndex = products.findIndex(p => p.id === id);

  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado." }); // 404 Not Found
  }

  // Validação para garantir que nome e preco sejam fornecidos
  if (!nome || !preco) {
    return res.status(400).json({ mensagem: "Nome e preço são obrigatórios para a atualização completa (PUT)." });
  }
  
  products[produtoIndex] = { id, nome, preco };
  
  res.status(200).json(products[produtoIndex]);
});

// Rota PATCH /produtos/:id
// Atualiza parcialmente um produto
app.patch('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  const produtoIndex = products.findIndex(p => p.id === id);

  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado." }); // 404 Not Found
  }

  // Permite atualizar apenas os campos fornecidos
  if (updates.nome) {
    products[produtoIndex].nome = updates.nome;
  }
  if (updates.preco) {
    products[produtoIndex].preco = updates.preco;
  }
  
  res.status(200).json(products[produtoIndex]);
});

// Rota DELETE /produtos/:id
// Remove um produto da lista
app.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoIndex = products.findIndex(p => p.id === id);

  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado." }); // 404 Not Found
  }

  products.splice(produtoIndex, 1);
  
  res.status(204).end(); // 204 No Content
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API de produtos rodando em http://localhost:${port}`);
});
