## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed].

## Pre commit

```bash
# Install husky: use it when you commit or push
npx husky-init
npm install
# Only check those files that changed
npm install lint-staged -D
# Update pre-commit file to run lint-staged when you commit
npx lint-staged
# Add lint-staged mongodbConfig in package.json file
eg.
  "lint-staged": {
    "*.{js,ts}": "eslint --fix",
    "*.{js,ts,scss,json,md}": "prettier --write"
  }
```

## CLI generate CRUD

```bash
nest g resource users
# https://docs.nestjs.com/recipes/crud-generator
```

## Setup load .env variables

```bash
npm i --save @nestjs/config
#https://docs.nestjs.com/techniques/configuration
```

## Setup MongoDB

```bash
npm i @nestjs/mongoose mongoose
#https://docs.nestjs.com/recipes/mongodb
```
