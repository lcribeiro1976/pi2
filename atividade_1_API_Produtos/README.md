# API de Produtos Simples (Node.js + Express)

Esta é uma API RESTful simples para gerenciar produtos, desenvolvida em Node.js com o framework Express.js. O objetivo do projeto é praticar a implementação de rotas, manipulação de dados em memória e o uso correto dos status codes HTTP.

---

## 🚀 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/lcribeiro1976/pi2.git](https://github.com/lcribeiro1976/pi2.git)
    ```

2.  **Instale as dependências:**
    ```bash
    cd pi2
    npm install
    ```

3.  **Inicie a aplicação:**
    ```bash
    node app.js
    ```
    API de produtos rodando em http://localhost:3000

---

## 🗺️ Rotas da API

| Método | Endpoint         | Descrição                                 | Status Codes |
| :----- | :--------------- | :---------------------------------------- | :----------- |
| `POST` | `/produtos`      | Adiciona um novo produto.                 | `201` (Sucesso), `400` (Dados inválidos), `409` (ID duplicado) |
| `GET`  | `/produtos`      | Retorna a lista completa de produtos.     | `200` (Sucesso) |
| `GET`  | `/produtos/:id`  | Retorna um produto específico pelo ID.    | `200` (Sucesso), `404` (Não encontrado) |
| `PUT`  | `/produtos/:id`  | Atualiza todos os campos de um produto.   | `200` (Sucesso), `400` (Dados inválidos), `404` (Não encontrado) |
| `PATCH`| `/produtos/:id`  | Atualiza parcialmente um produto.         | `200` (Sucesso), `404` (Não encontrado) |
| `DELETE`| `/produtos/:id` | Remove um produto.                        | `204` (Sucesso), `404` (Não encontrado) |

---

## 🐞 Dificuldades Encontradas e Soluções

1.  **Erro de Referência (`ReferenceError`)**: No início, a variável `products` foi declarada, mas em algumas rotas foi digitada incorretamente como `produtos`. Isso causava um erro de referência.
    * **Solução**: Revisei o código e padronizei o nome da variável para `products` em todas as rotas, garantindo consistência. O rastreamento de pilha (stack trace) no terminal foi fundamental para identificar a linha exata do problema.

2.  **Validação de Dados**: Validar a entrada do usuário para garantir que o `id` fosse numérico e único na rota `POST` exigiu o uso de condicionais (`if`) e a função `Array.prototype.find()` para buscar por IDs duplicados, retornando o status `409 Conflict` conforme a especificação.

---

## ✅ Testes e Requisitos

Os testes foram realizados utilizando a ferramenta **Postman**. Todas as requisições foram salvas em uma coleção e exportadas, conforme solicitado. Prints das requisições mais importantes (`POST` de sucesso, `GET` de um ID não encontrado, `DELETE` com `204 No Content`) foram incluídos na pasta `postman-exports/` para demonstração.

* **Arquivo de Coleção**: `postman-exports/api-de-produtos-collection.json`
