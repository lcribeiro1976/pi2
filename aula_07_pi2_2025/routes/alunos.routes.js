const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

// Rota pública para testar autenticação
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Lista de alunos visível apenas para usuários autenticados", user: req.user });
});

// Rota protegida para admins
router.post("/", authMiddleware, isAdmin, (req, res) => {
  res.json({ message: "Aluno criado com sucesso (somente admins podem)" });
});

module.exports = router;
