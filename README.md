# Sistema de Cadastro de Usuários
<img src="../API node jwt/frontend/react-cadastro/src/assets/cadastro.jpeg" alt="Tela de cadastro" width="500"/>
<img src="../API node jwt/frontend/react-cadastro/src/assets/lista.jpeg" alt="Tela de cadastro" width="500"/>
<img src="../API node jwt/frontend/react-cadastro/src/assets/login.jpeg" alt="Tela de cadastro" width="500"/>

<br>

Este projeto é um Sistema de Cadastro de Usuários, desenvolvido como uma aplicação web full-stack. O sistema permite que novos usuários se cadastrem, façam login e visualizem uma lista de usuários cadastrados. Ele foi construído utilizando tecnologias modernas de desenvolvimento web, garantindo uma estrutura robusta e fácil de manter.

## Funcionalidades
- **Cadastro de Usuários**: Usuários podem se registrar fornecendo nome, e-mail e senha.
- **Login de Usuários**: Usuários registrados podem fazer login utilizando seu e-mail e senha.
- **Listagem de Usuários**: Usuários autenticados podem visualizar a lista de todos os usuários cadastrados no sistema.

## Tecnologias Utilizadas

### Backend:

- **Node.js**: Plataforma JavaScript utilizada para a construção do backend.

- **Express**: Framework para Node.js utilizado para gerenciar rotas e requisições HTTP.

- **Prisma**: ORM (Object-Relational Mapping) usado para interagir com o banco de dados.

- **JWT (JSON Web Token)**: Utilizado para autenticação e segurança das rotas privadas.

- **bcrypt**: Biblioteca usada para criptografar senhas antes de armazená-las no banco de dados.

### Frontend:

- **React**: Biblioteca JavaScript utilizada para a construção do frontend.

- **React Router**: Biblioteca para roteamento e navegação entre as páginas da aplicação

- **Tailwind CSS**: Framework CSS utilizado para a estilização dos componentes da interface.

### Banco de Dados:

- MongoDB Banco de dados NoSQL, versão gratuita utilizada.

## Estrutura do Projeto

### Backend:

- **routes/** : Contém as rotas públicas e privadas do sistema.

- **middlewares/** : Middleware de autenticação para proteger as rotas privadas.

- **server.js** : Arquivo principal que inicializa o servidor Express.

### Frontend:

s- **rc/pages/** : Contém as páginas principais da aplicação (Cadastro, Login e Lista de Usuários).

- **src/services/api.js** : Configuração da API para fazer requisições HTTP ao backend.


## Pré-requisitos

### Passo a Passo

Crie uma pasta backend e outra pasta frontend. 


Na pasta backend, abra o terminal e excute os seguintes comandos: 

- **Node.js** : Certifique-se de ter o Node.js instalado em sua máquina.

    [Clique aqui](https://nodejs.org/en/download/prebuilt-installer) para instalar o node no computador e, assim que o download concluir, siga o passo a passo do instalador até o fim. 
    <br>
    Logo após, verifique pelo terminal se o node foi realmente instalado.
    ```bash
     node --version
    ```

    - **npm ou yarn** : Gerenciador de pacotes para instalar as dependências do projeto.


1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/api_node_React_jwt_user-registration.git
    cd api_node_React_jwt_user-registration
    ```

2. Defina as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e defina a variável JWT_SECRET. 
    <br>
    **Oservação:** Veja nesse [link](https://dev.to/tkirwa/generate-a-random-jwt-secret-key-39j4) como gerar um jwt secret key aleatorio pelo terminal. E depois copie e cole essa secret-key no valor da variavel no arquivo env. 

    ```bash
    JWT_SECRET=your_secret_key_here
    ```

3. Configuração do Banco de Dados: 

    Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) e configure um cluster gratuito. Após configurar o cluster, obtenha a string de conexão no formato mongodb+srv://:@cluster.mongodb.net/?retryWrites=true&w=majority.

    <br>
    Verifique se o arquivo schema.prisma está configurado corretamente para usar o MongoDB como banco de dados. O arquivo deve conter algo semelhante a:
  
    ```bash
        datasource db {
        provider = "mongodb"
        url      = env("DATABASE_URL")
        }
    ```
    No arquivo .env na raiz do diretório do back-end adicione a seguinte linha, substituindo pela string de conexão que você obteve no MongoDB Atlas:

    ```bash
       DATABASE_URL="<string-de-conexao>"
    ```
    **Essas e outras informações voce encontra na documentação da biblioteca [prisma](https://www.prisma.io/)**
    <br>

## Como Executar o Projeto

## No backend

1. Para rodar o servidor , dentro da pasta backend digite o comando:

    ```bash
        node  –watch server.js
    ```
   
3. Para rodar a biblioteca prisma, dentro da pasta backend digite o comando: 

    ```bash
    npx prisma studio 
    ```
2.  A aplicação backend estará rodando em:
    
     `http://localhost:3000`.

## No frontend

1. Para rodar o react, dentro da pasta frontend digite o comando: 

    ```bash
        npm run dev
    ```

2. A aplicação frontend estará rodando em:

     `http://localhost:5173/`.
   