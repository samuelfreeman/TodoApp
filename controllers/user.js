const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const users = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!users) {
      res.status(422).json({
        message: 'invalid password',
      });

    }
    else{
      const token = signToken(users.id)
    }
  } catch (error) {}
};

const saveUser = async (req, res, next) => {
  try {
    const data = req.body;

    const user = await prisma.user.create({
      data,
    });
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({
      include: {
        tasks: true,
      },
    });
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const singleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        tasks: true,
      },
    });
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const removeUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(404).json({
      message: 'User has been deleted',
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
  updateUser,
  removeUser,
  getUsers,
  singleUser,
};
