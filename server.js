const express = require('express');

const app = express();

const bodyParser = require('body-parser');

require('dotenv').config();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(bodyParser.json());

const appRouter = require('./routes/index');

const PORT = process.env.PORT;
app.get('/', (req, res, next) => {
  res.json({
    message: 'hello wecome to my todo app',
  });
});

app.use(appRouter);

app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
