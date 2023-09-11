// importing the prisma dependency
const { PrismaClient } = require('@prisma/client');

const HttpException = require('./http-exception');

const prisma = new PrismaClient();

// authenticating user email
const userEmail = async (req, res, next) => {
  const email = req.body.email;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    next(new HttpException(422, 'Please sign up!'));
  } else {
    next();
  }
};
module.exports = {
  userEmail,
};
