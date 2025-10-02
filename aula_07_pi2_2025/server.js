const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const alunosRoutes = require("./routes/alunos.routes");

dotenv.config();
const app = express();

app.use(express.json());

// Rotas
app.use("/auth", authRoutes);
app.use("/alunos", alunosRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado!"))
  .catch(err => console.error(err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT} 🚀`));
