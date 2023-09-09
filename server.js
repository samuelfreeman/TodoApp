const express = require('express');

const app = express();

require('dotenv').config();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const PORT = process.env.PORT;

async function addUser() {
  const test = await prisma.user.create({
    data: {
      email: 'sam@gmail.com',
      password: '8372638',
    },
  });
  console.log(test);
}

addUser();

app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
