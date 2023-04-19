# Estrutura Base de API
Essa é uma estrutura base para criação de APIs utilizando Express, TypeScript e Sequelize


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com);
- [Node.js](https://nodejs.org/en/);
- [VSCode](https://code.visualstudio.com/).

Além disso será necessário ter uma conta em um banco de dados Postgres. Exemplo:
- [Elephantsql](https://www.elephantsql.com/).

___

### 🎲 Rodando o Back End (servidor)

#### Clone este repositório
```bash
$ git clone https://github.com/Alameda-Indiano/agenda-medica-backend.git
```

#### Acesse a pasta do projeto no terminal/cmd
```bash
$ cd agenda-medica-backend
```

#### Instale as dependências
```bash
$ npm install
```

#### Configure suas variáveis de ambiente

- 1° Crie o arquivo <strong>.env</strong> na raiz do projeto
- 2° Cadastre as variáveis de ambiente seguindo o exemplo que está no arquivo <strong>.env.example</strong>
```bash
$ .env
```

#### Execute a Aplicação 
```bash
$ npm run dev
```

#### O servidor inciará na porta:8080 - acesse http://localhost:8080
___

### ⚡ Scripts Command Line

#### Iniciar o servidor
```bash
$ npm run dev
```

#### Debugar no Console
```bash
$ npm run debug
```

#### Buildar Projeto
```bash
$ npm run build
```

#### Criar tabelas no banco de dados
```bash
$ npm run db:migrate
```

#### Remover tabelas do banco de dados
```bash
$ npm run db:undo
```

#### Startar o servidor após build
```bash
$ npm start
```
___

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org)
- [Jest](https://www.npmjs.com/package/jest)

___

### ⚒️ Dependências e Bibliotecas

As seguintes dependências e bibliotecas foram usadas na construção do projeto:

- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [Tsup](https://www.npmjs.com/package/tsup)
- [Tsx](https://www.npmjs.com/package/tsx)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Pg](https://www.npmjs.com/package/pg)


<h4 align="center"> 
	🚧   Em construção...  🚧
</h4>
