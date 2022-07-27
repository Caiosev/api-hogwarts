
# Bem Vindo a Hogwarts! 🧙

Este é o repositorio Back-end do Projeto Hogwarts, [clique aqui para ir para a versão Front-end](https://github.com/Caiosev/frontend-hogwarts)


## Propósito
Este projeto nasceu da necessidade que senti de ir um pouco além, já havia feito alguns projetos de frontend e de backend mas todos relativamente pequenos, que não se comunicavam e nem estavam em deploy.

### A ideia
Estava em busca de uma ideia de sistema onde eu poderia fazer CRUD e utilizar sistema de autenticação com diferentes logins. Depois de listar algumas ideias de sistemas, cheguei a conclusão que um sistema de escola cumpria todos os requisitos que desejava, então comecei a criar uma escola fictícia do zero, com todos concept design, história etc. No meio desse processo percebi que demoraria muito tempo para fazer tudo isso, e então tive uma epifania: qual é a melhor saga de filmes onde já existe uma escola?.....HOGWARTS É CLARO!!!

## O Projeto

<details>
  <summary><strong>💻 Tecnologias Utilizadas</strong></summary><br />


**Front-end:** Axios, GSAP, React, React-Modal, Redux, Redux Saga, SaSS

**Back-end:** Node, Express, BCrypt, JWT, Multer, Sequelize, Maria DB, Google Cloud, Docker


</details>


<details>
  <summary><strong>🛤️️Rotas</strong></summary><br />


* `/prof` GET, POST, DELETE, PUT, GET com param do id professor (POST, PUT e DELETE requerem login como professor) Utilizada para CRUD do prof

* `/tokens` POST Utilizada para gerar Tokens

* `/alunos` GET, POST, DELETE, PUT, GET com param do id do aluno (Para qualquer requisição é necessario login como aluno ou professoressor) Utilizada para CRUD do aluno

* `/casas` GET, POST, DELETE, PUT, GET com param do id da casa (POST, PUT e DELETE requerem login como professor) Utilizada para CRUD de Casas

* `/provas` GET, POST, DELETE, PUT, GET com param do id da prova (para POST é necessario login como aluno, PUT e DELETE requerem login como professor) Utilizada para CRUD de provas

* `/materias` GET, POST, DELETE, PUT, GET com param do id da materia (para POST, PUT e DELETE requerem login como professor) Utilizada para CRUD de Materias

* `/salas` GET, POST, DELETE, PUT, GET com param do id da materia (para POST, PUT e DELETE requerem login como professor) Utilizada para CRUD de salas

* `/fotosAlunos` POST (POST requer login como professor) Utilizada para cadastrar foto do aluno

* `/fotosProf` POST (POST requer login como professor) Utilizada para cadastrar foto do Professor

</details>

<details>
  <summary><strong>🗣 Me envie um feedback</strong></summary><br />
  
    Gostou de projeto? Alguma sugestão? Encontrou algum bug? 
[Me chame no Linkedin para conversarmos](https://www.linkedin.com/in/caio-severino/)


</details>

<https://hogwarts-api.seventerprise.tech>


