## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

API Coleção de Games
Esta é uma API RESTful para gerenciamento de uma coleção de jogos, construída com Node.js, Express e MongoDB (Atlas). O projeto suporta operações CRUD e segue o padrão MVC, além de utilizar middlewares para segurança, parsing e tratamento de erros.

✨ Funcionalidades Implementadas
CRUD completo para Games:

Criar, listar, atualizar e excluir jogos do banco.

Validação dos dados obrigatórios pelo Mongoose.

Retorno padronizado para erros e operações inválidas.

Estrutura modular (MVC):

Controllers, Models e Routes separados.

Middlewares globais:

CORS, parsing JSON, tratamento de erros assíncronos.

Documentação rápida:

Collection Postman com exemplos de chamadas de todas as rotas.

🛠️ Middlewares Criados
CORS: Permite que clientes de diferentes origens acessem a API.

js
app.use(cors());
Parsing de JSON: Permite receber e tratar dados via corpo das requisições.

js
app.use(express.json());
Tratamento de erros nos controllers: Garante que falhas de código, validação e banco retornem status apropriados (400/404/500) e mensagens claras.

js
try {
  // operação
} catch (err) {
  res.status(500).json({ error: err.message });
}
Validação de dados via schema:
Por meio do próprio Mongoose (campo required), evita dados inconsistentes.

js
titulo: { type: String, required: true }
🚧 Desafios e Soluções
Erro “MODULE_NOT_FOUND” nas rotas:
Solução: Criação rigorosa da árvore de arquivos esperada (routes/gameRoutes.js), diretórios e arquivos conforme padrão Node.

Erro “ENOTFOUND” na conexão Atlas:
Solução: Copiar URI real do cluster Atlas, ajustar usuário/senha, garantir o nome correto do cluster, banco e senha na string.

IP não liberado no Atlas:
Solução: Adicionar o IP público atual (ou 0.0.0.0/0 para desenvolvimento) na whitelist do Atlas em [Network Access].

.env não sendo lido:
Solução: Garantir o arquivo .env na raiz, instalar dotenv (npm install dotenv) e incluir require('dotenv').config() no início do código.

Tratamento assíncrono e modularização:
Solução: Separação dos controllers e uso consistente de async/await e try...catch para respostas padronizadas.

🚀 Como rodar o projeto
Pré-requisitos
Node.js v14 ou superior

Conta no MongoDB Atlas

Postman (para testar a API)

bash
npm install
Configure MongoDB Atlas e variáveis de ambiente

Crie um cluster e usuário no Atlas.

Em Network Access, libere seu IP (ou 0.0.0.0/0 para qualquer IP).

Copie a string de conexão do Atlas e coloque em .env:

text
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@cluster0.abcd123.mongodb.net/games_db?retryWrites=true&w=majority
PORT=3000
Use .env.example para mostrar os campos necessários (não commite suas credenciais).

Execute o servidor

bash
npm start
Ou diretamente:

bash
node index.js
Teste as rotas no Postman

Importe a coleção Postman (postman-tests/API-Games.postman_collection.json)

Teste todos os endpoints CRUD:

Método	Rota	Função
GET	/api/games	Listar todos os jogos
GET	/api/games/:id	Buscar jogo por ID
POST	/api/games	Criar novo jogo
PUT	/api/games/:id	Atualizar dados do jogo
DELETE	/api/games/:id	Remover jogo
📂 Estrutura do Projeto
text
atividade_2_Colecao_Games/
├── index.js              # Inicialização servidor
├── package.json
├── .gitignore
├── .env.example
├── README.md
├── controllers/
│   └── gameController.js # Funções CRUD
├── models/
│   └── Game.js           # Schema do banco
├── routes/
│   └── gameRoutes.js     # Endpoints da API
└── postman-tests/
    ├── API-Games.postman_collection.json
    └── screenshots/
