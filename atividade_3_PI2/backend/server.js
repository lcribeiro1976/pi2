require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Modelo
const Aluno = mongoose.model("Aluno", {
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  curso: { type: String, required: true },
});

// Rotas
app.get("/health", (req, res) => res.json({ ok: true }));
app.get("/alunos", async (req, res) => res.json(await Aluno.find()));
app.get("/alunos/:id", async (req, res) => {
  const aluno = await Aluno.findById(req.params.id);
  if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
  res.json(aluno);
});
app.post("/alunos", async (req, res) => {
  try {
    const novo = await Aluno.create(req.body);
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});
app.put("/alunos/:id", async (req, res) => {
  const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
  res.json(aluno);
});
app.delete("/alunos/:id", async (req, res) => {
  const r = await Aluno.findByIdAndDelete(req.params.id);
  if (!r) return res.status(404).json({ erro: "Aluno não encontrado" });
  res.json({ ok: true });
});

// Boas práticas: só inicia o servidor após conectar no Mongo
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/alunos";

(async () => {
  try {
    console.log("🗄️  Conectando ao MongoDB:", URI);
    await mongoose.connect(URI);
    console.log("✅ MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`🚀 Backend em http://localhost:${PORT}`);
      console.log(`🔎 Health check: http://localhost:${PORT}/health`);
    });
  } catch (err) {
    console.error("❌ Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  }
})();
