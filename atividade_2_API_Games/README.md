# API REST de Gerenciamento de Jogos

Uma API REST completa para gerenciar uma coleção de jogos, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar). Desenvolvida com **Node.js**, **Express.js** e **MongoDB Atlas**.

---

## 🚀 Funcionalidades da API

A API oferece os seguintes endpoints para a gestão dos jogos:

* **`POST /api/games`**: Cria um novo jogo.
* **`GET /api/games`**: Lista todos os jogos cadastrados.
* **`GET /api/games/:id`**: Retorna os detalhes de um jogo específico pelo seu ID.
* **`PUT /api/games/:id`**: Atualiza as informações de um jogo existente.
* **`DELETE /api/games/:id`**: Deleta um jogo da coleção.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express.js**: Framework para construção da API.
* **MongoDB Atlas**: Banco de dados NoSQL.
* **Mongoose**: ODM (Object Data Modeling) para MongoDB.
* **dotenv**: Para gerenciamento de variáveis de ambiente.
* **CORS**: Middleware para habilitar requisições de diferentes origens.
* **Nodemon**: Ferramenta para desenvolvimento (recarrega o servidor automaticamente).

---

API REST de Gerenciamento de Jogos
Este relatório descreve as funcionalidades e os middlewares implementados na API REST para gerenciar uma coleção de jogos, desenvolvida com Node.js e Express.js.

Funcionalidades (CRUD)
A API foi projetada para permitir o gerenciamento completo da coleção de jogos, seguindo o padrão CRUD (Create, Read, Update, Delete). As seguintes rotas foram implementadas:

POST /api/games: Responsável por criar um novo registro de jogo no banco de dados, a partir dos dados enviados no corpo da requisição.

GET /api/games: Permite listar todos os jogos cadastrados na coleção.

GET /api/games/:id: Utilizada para visualizar os detalhes de um único jogo, buscando-o por seu ID exclusivo.

PUT /api/games/:id: Atualiza as informações de um jogo existente, usando seu ID como identificador.

DELETE /api/games/:id: Deleta um jogo permanentemente da coleção, com base no seu ID.

Middlewares Implementados
Os middlewares foram essenciais para processar as requisições, tratar erros e garantir a segurança e a usabilidade da API.

express.json(): Este middleware global foi utilizado para processar e analisar corpos de requisição no formato JSON, permitindo que a API receba e interprete os dados enviados nas requisições POST e PUT.

cors(): O middleware de CORS (Cross-Origin Resource Sharing) foi implementado para permitir que a API seja acessada por aplicações web hospedadas em domínios diferentes. Isso é fundamental para que um frontend, por exemplo, possa se comunicar com a API sem bloqueios de segurança do navegador.

Middleware de Erro Centralizado: Um middleware de erro foi criado para capturar e tratar todos os erros da aplicação de forma padronizada. Ele assegura que a API retorne respostas claras com códigos de status apropriados para diferentes tipos de erros, como:

400 Bad Request: Para erros de validação de dados ou IDs inválidos.

404 Not Found: Quando um recurso (como um jogo com um ID específico) não é encontrado.

500 Internal Server Error: Para erros inesperados no servidor, garantindo que o cliente receba uma resposta consistente.

## 📦 Como Rodar o Projeto

Siga estes passos para configurar e executar a API em sua máquina local.

**1. Clone o repositório:**

```bash
git clone https://github.com/lcribeiro1976/pi2.git
cd atividade\\\_2\\\_API\\\_Games

## 🚀 Prints dos Testes do Postman

https://1drv.ms/i/c/4516005a3c9096e3/EYaHKwBD4tVAgXeFHUqmoKUBzwE2k2icyP9Mtfac_j0_tg?e=wFAzvK
https://1drv.ms/i/c/4516005a3c9096e3/Ed1C-NRyXYRJvJZaF3Lwgt4Bp5zpfnpWjit8kU74nszXJA?e=Vhqvlr
https://1drv.ms/i/c/4516005a3c9096e3/Edxe6OosH7NDuRDhXduUu98Bgo35Os8czK2ZUL0THozsGA?e=2VVu1N
https://1drv.ms/i/c/4516005a3c9096e3/EY0FVc5tAypPupOwmeuoXFEBMgxnFltwTvnD66gTeHwXRA?e=7toCaQ
https://1drv.ms/i/c/4516005a3c9096e3/EZiRv5Wvhr9LhkejFRVTNhcBPcQWkg_aHlVoQv6LvCCf_Q?e=l6RG35

<img width="1150" height="605" alt="Captura de tela 2025-09-15 161025" src="https://github.com/user-attachments/assets/6f6e9258-8eab-4039-b47f-316c40099c6f" />
<img width="1136" height="601" alt="Captura de tela 2025-09-15 194104" src="https://github.com/user-attachments/assets/1bcbd256-7640-4682-823f-d4cbccb50dd8" />
<img width="1140" height="563" alt="Captura de tela 2025-09-15 193839" src="https://github.com/user-attachments/assets/a7e33a91-6683-4052-bbf3-a0664f952cd8" />
<img width="1144" height="563" alt="Captura de tela 2025-09-15 192929" src="https://github.com/user-attachments/assets/5d785675-bcf0-4cd3-b776-5ba0d23513d6" />
<img width="1141" height="569" alt="Captura de tela 2025-09-15 192529" src="https://github.com/user-attachments/assets/176f36e0-99ba-47c7-9ffe-8572c03c18b6" />

<img src="/attachments/assets/Captura de tela 2025-09-15 161025" />
