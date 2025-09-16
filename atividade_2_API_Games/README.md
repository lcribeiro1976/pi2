# API REST de Gerenciamento de Jogos

Uma API REST completa para gerenciar uma coleção de jogos, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar). Desenvolvida com **Node.js**, **Express.js** e **MongoDB Atlas**.

---

## 🚀 Funcionalidades da API

A API oferece os seguintes endpoints para a gestão dos jogos:

- **`POST /api/games`**: Cria um novo jogo.
- **`GET /api/games`**: Lista todos os jogos cadastrados.
- **`GET /api/games/:id`**: Retorna os detalhes de um jogo específico pelo seu ID.
- **`PUT /api/games/:id`**: Atualiza as informações de um jogo existente.
- **`DELETE /api/games/:id`**: Deleta um jogo da coleção.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para construção da API.
- **MongoDB Atlas**: Banco de dados NoSQL.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **CORS**: Middleware para habilitar requisições de diferentes origens.
- **Nodemon**: Ferramenta para desenvolvimento (recarrega o servidor automaticamente).

---

## 📦 Como Rodar o Projeto

Siga estes passos para configurar e executar a API em sua máquina local.

**1. Clone o repositório:**
```bash
git clone https://github.com/lcribeiro1976/pi2.git
cd atividade_2_API_Games

## 🚀 Prints dos Testes do Postman

<img width="1136" height="601" alt="Captura de tela 2025-09-15 194104" src="https://github.com/user-attachments/assets/01cbe451-3c27-4951-8e93-e1ceb44e7a9a" />
<img width="1140" height="563" alt="Captura de tela 2025-09-15 193839" src="https://github.com/user-attachments/assets/64095993-930f-4dca-a2e6-b783e1a67ea3" />
<img width="1144" height="563" alt="Captura de tela 2025-09-15 192929" src="https://github.com/user-attachments/assets/95fcd872-98c5-44de-8005-4a9431c579af" />
<img width="1141" height="569" alt="Captura de tela 2025-09-15 192529" src="https://github.com/user-attachments/assets/a529a289-282f-4ecc-a514-97e604474912" />
<img width="1150" height="605" alt="Captura de tela 2025-09-15 161025" src="https://github.com/user-attachments/assets/f27b1503-8f4d-461c-8201-d2e941072213" />
<img width="1150" height="605" alt="Print do teste POST do Postman" src="./assets/teste_postman.png" />
