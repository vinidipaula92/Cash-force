# Seja bem vindo ao projeto Cash Force!

## Stack utilizada

<details><summary><strong>Front-end</strong></summary>

- Vue JS;
- Bootstrap
</details>

<details><summary><strong>Back-end</strong></summary>

- NodeJs;
- Express;
- Sequelize;

</details>

<details><summary><strong>Banco de dados</strong></summary>

- MySQL;

</details>

### Desenvolvimento

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

O `Cash Force` é um site para verificarmos notas fiscais!

1. Foi desenvolvido o `Cash Force`, onde fiquei responsável por desenvolver uma API e também integrar as aplicações para que elas funcionem consumindo um banco de dados.

2. Pude também implementar com que o front-end consumisse essa API, fazendo as requisições via `AXIOS`.

- Notas fiscais com seus respectivos status;

</details>

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 3 entidades importantes na sua estrutura:

1️⃣ **Banco de dados:**

- Você pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais no arquivo .env.example
- Adicionei um arquivo no local `/app/backend/.env.example` para caso você queira rodar o banco de dados localmente, basta renomea-lo para .env e as váriaveis de ambiente já estão configuradas ao docker.

2️⃣ **Back-end:**

- Ele roda na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
- Sua aplicação é inicializada a partir do arquivo `app/backend/src/app.js`;
- Ela garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;

3️⃣ **Front-end:**

- O front se comunica com serviço de back-end pela url `http://localhost:5173` através dos endpoints que foi construído.
</details>

<details>

<summary><strong>🕵️ Linter</strong></summary><br />

Para garantir a qualidade do código, usei o [ESLint](https://eslint.org/) para fazer a sua análise estática.

Você também pode instalar o plugin do `ESLint` no `VSCode`: bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

</details>

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

- Sistema Operacional Distribuição Unix
- Node versão 16
- Docker
- Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`:

- Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
- Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
  - `nvm install 16 --lts`
  - `nvm use 16`
  - `nvm alias default 16`

</details>

# Orientações

<details>
  <summary><strong>Rodando o BANCO MYSQL com Docker</strong></summary>
  
  ## 👉 Com Docker instalado
  - Rode este comando no terminal
    `docker run -dit --name dockerSQL -e MYSQL_ROOT_PASSWORD=123456 -v ~/mysql_data:/var/lib/mysql -p 3002:3306 mysql`
    
  - [Instale o Workbench](https://dev.mysql.com/downloads/workbench/)
  
  - Adicione uma nova conexão
  ![Add-config](assets/add-config.png)
  
  - Coloque as credenciais como refere a imagem abaixo e clique em Store in Keychain para colocar a senha que setamos do container MYSQL
  ![Front-end](assets/workbench.png)

- Para rodar o projeto por completo:
  - Abra dois terminais;
  - Certifique-se que esteja na pasta principal;
  - Rode em seu terminal `npm run start:backend` e no outro `npm run start:frontend`;

</details>

<details>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

Para o desenvolvimento, foi baseado no _Diagrama de Entidade-Relacionamento (DER)_ para construir a modelagem do banco de dados. Com essa imagem você já consegue saber:

- Os nome das tabelas e colunas;
- Os tipos de suas colunas;
- Relações entre tabelas.

  ![Exemplo banco de dados](assets/diagram-ERR.png)

</details>
<h1 style="center">Obrigado pela visita ao meu repositório</h1>

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vinidipaula.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinicius-depaula/)
