# Node API with Nestjs + mongo 


Projeto backend em Nodejs + Nestjs + Mongo db para realizar o cadastramento em RESTful de produtos e restaurantes

# Requisitos:

* [Docker](https://www.docker.com/get-started)

* [Docker Compose](https://docs.docker.com/compose/install/)

Pode-se tambem testar local caso a maquina possua instalado o MongoDB e Nodejs (versao >=10.18.1).

# Tecnologias/libs utilizadas:

* Nodejs

* Docker

* Nestjs

* MongoDB

* Multer

* Swagger

## Instalacao desenvolvimento em hot reloading ( Opcional caso sem uso de Docker):
```bash

$ npm install


```

## Executando o app

```bash
# dev
$ docker-compose up

# dev - NestJS Local
$ npm run start:dev

```


## Projeto

O projeto foi estruturado seguindo padrao OO, com auxilio do framework NestJS, sendo criado dois modulos principais contendo mesma estrutura hierarquica:
- controllers = onde fica o roteamento das apis
- services = contem a regra de negocio com o banco de dados
- interface = interface da collection
- schema = esquema da collection a ser setada no mongo
- dto = modelo de corpo para requests

Segue as collections
- ## restaurants
    - name = nome do restaurante (string)
    - address = endereco (string)
    - photoURL = caminho URL da imagem (string)
    - endDay = ultimo dia setado que abre (number de 0 - segunda a 6 - domingo)
    - startDay = primeiro dia setado que abre (number de 0 - segunda a 6 - domingo)
    - startHourMinutes = tempo em HH:mm correspondente ao horario que abre o restaurante (string)
    - endHourMinutes = tempo em HH:mm correspondente ao horario que fecha o restaurante (string)

- ## products
  - name = nome do produto (string)
  - category = categoria do produto
  - photoURL = caminho do arquivo da imagem
  - price = preco do produto
  - promoprice = preco promocional do produto
  - startHourMinutes = tempo da promocao inicial em HH:mm
  - promoDay = dia da semana da promocao
  

# Validacoes

Para validar, existem as regras de horarios tanto no mongo, como por meio de Pipes (atuam como decorators ou especie de middleware validadores em uma rota especifica).O pacote *class-validator* foi utilizado para validar campos corpo a corpo.

# Imagem

Para salvar as imagens, foi utilizado a lib *multer* sendo simulado o armazenamento em local ou dockerizado, para posteriormente ser salvo no mongo nos campos *photoURL* apenas o caminho relativo do arquivo.


# Documentaçao

Para documentar as apis fora escolhido o swagger, onde pode-se acessar o mesmo atraves do link http://localhost:3000/api
