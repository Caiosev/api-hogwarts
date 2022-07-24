
# Bem Vindo a Hogwarts! 🧙

Este é o repositorio Back-end do Projeto Hogwarts, [clique aqui para ir para a versão Front-end](https://github.com/Caiosev/frontend-hogwarts)


## Objetivo do Projeto
A ideia surgiu apartir da necessidade que senti de ter um projeto aonde eu faria desde conceito de telas até o deploy, entendendo por completo como todas as partes de uma aplicação Web se comunicão.

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


