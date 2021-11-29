# Teste LinkApi

- Node.js
- Typescript
- MongoDB

## Requisitos
* Criar contas testes nas plataformas Pipedrive e Bling.
* Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).
* Criar banco de dados Mongo, existem serviços como MongoDB Atlas para criar de graça.
* Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
* Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Clonando repositorio

```
git clone https://github.com/rodsussumu/test-linkapi.git
```

## Instalando dependencias 

```
npm install
```

## Executando projeto

```
npm start
```

# Routes
## 1. Criando produto no bling
Cria o produto(padrão) na plataforma do bing\
POST: /product\
Response:
```
[
  {
    "codigo": "22",
    "descricao": "Caneta 001",
    "situacao": "Ativo",
    "preco": "50"
  }
]
```

## 2. Exportando negócios do pipedrive para o bling
Exporta os negócios(deals) do pipedrive e transforma em pedidos(orders)\
POST: /orders\
Response: 
```
[
  {
    "title": "Negócio Teste",
    "value": 250,
    "org_name": "Teste",
    "person_name": "Teste",
    "products_count": 5,
    "won_time": "2021-11-28 18:38:58"
  },
  {
    "title": "Negócio Rodrigo",
    "value": 750,
    "org_name": "Rodrigo",
    "person_name": "Rodrigo",
    "products_count": 15,
    "won_time": "2021-11-28 20:53:04"
  }
]
```

## 3. Contagem e envio de valores para o MongoDB
Contagem de pedidos e envio de valores\
POST: /total\
Response:
```
{
  "date": "2021-11-28T21:10:44.631Z",
  "dateLocale": "28/11/2021",
  "count": 2,
  "value": 1000
}
```

## 4. Listagem de valores do mongoDB
Lista os valores enviados para o mongoDB\
GET: /total\
Response:
```
[
  {
    "_id": "61a3eeaef1aa7cc2650d320f",
    "date": "2021-11-28T21:03:42.358Z",
    "dateLocale": "28/11/2021",
    "count": 2,
    "value": 1000,
    "__v": 0
  }
]
```
