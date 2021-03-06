import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes';

import connection from './database/connection';
connection();

import TotalJob from './jobs/cron-jobs';
const job = new TotalJob();

const app = express();

app.use(express.json());
app.use(routes);

export default app;
