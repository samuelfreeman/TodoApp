const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const saveTask = async (req, res, next) => {
  try {
    const data = req.body;
    const task = await prisma.task.create({
      data,
    });
    res.status(201).json({
      task,
    });
  } catch (error) {
     res.status(500).json({
      message: error.message,
    })
  }
  next();
};

const getTasks = async (req, res, next) => {
  try {
    const task = await prisma.task.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json({
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
  next();
};

const singleTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await prisma.task.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  next();
};

const removeTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });
    res.status(404).json({
      message: "task has been deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  next();
};

const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const task = await prisma.task.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  next();
};

module.exports = {
  saveTask,
  updateTask,
  removeTask,
  getTasks,
  singleTask,
};
