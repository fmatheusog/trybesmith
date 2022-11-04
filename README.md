# Descrição

## **Resumo**

Neste projeto, foi criado uma loja de itens medievais, no formato de uma API Rest. <br />

Foi utilizado o conceito de camadas (model, service e controller), e por meio dessa aplicação, é possível realizar as operações básicas de um CRUD (create, read, update, delete).

## **Tecnologias utilizadas**

- Typescript
- MySQL
- Sequelize

## **Instruções**

Instalar dependências

`npm install`

Inicializar aplicação diretamente

`npm start`

Inicializar aplicação pelo container docker

`docker compose up`

#  Endpoints

**Users**
----
  Retorna um JSON contendo um token.

* **URL**

  /users

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  name=[string]
  password=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token: 'string' }`

**Products**
----
  Retorna um array com todos os produtos ou um array vazio.

* **URL**

  /products

* **Method:**

  `GET`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
      {
        id: 1,
        name: 'string',
        amount: 1
      },
      {
        id: 2,
        name: 'string',
        amount: 2
      },
      {
        id: 3,
        name: 'string',
        amount: 3
      }
    ]`
----
  Retorna um JSON contendo nome e quantidade do produto criado.

* **URL**

  /products

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  name=[string]
  amount=[number]

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id: 3, name: 'string', amount: 1 }`

**Products**
----
  Retorna um array com todos os pedidos ou um array vazio.

* **URL**

  /orders

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
  {
    id: 1,
    userId: 1,
    productIds: [ 1, 2, 3 ]
  },
  {
    id: 2,
    userId: 5,
    productIds: [ 1, 2, 3, 4 ]
  },
  {
    id: 3,
    userId: 2,
    productIds: [ 1 ]
  }
]`