// Utilizados:
// Nodemon para atualizar sempre que há alterações
// Sucrase para utilizar import e export from no node

import dotenv from 'dotenv';
import helmet from 'helmet';
import express from 'express';
import { resolve } from 'path';
import homeRoutes from './routes/homeRoutes';
import profRoutes from './routes/profRoutes';
import tokenRoutes from './routes/TokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoAlunoRoutes from './routes/fotoAlunoRoutes';
import fotoProfRoutes from './routes/fotoProfRoutes';
import casaRoutes from './routes/casaRoutes';
import materiaRoutes from './routes/materiaRoutes';
import provaRoutes from './routes/provaRoutes';
import salaRoutes from './routes/salaRoutes';

import './database';

const cors = require('cors');

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
      res.header('Access-Control-Allow-Headers', 'Content-Type , Authorization');
      this.app.use(cors());
      next();
    });
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/prof', profRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/casas', casaRoutes);
    this.app.use('/provas', provaRoutes);
    this.app.use('/materias', materiaRoutes);
    this.app.use('/salas', salaRoutes);
    this.app.use('/fotosAlunos', fotoAlunoRoutes);
    this.app.use('/fotosProf', fotoProfRoutes);
  }
}

export default new App().app;
