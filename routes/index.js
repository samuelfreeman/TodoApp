const { Router } = require('express');

const appRouter = Router();

// importing all routes
const tasks = require('./task');

const user = require('./user');

// middleware

appRouter.use('/task', tasks);
appRouter.use('/user', user);

module.exports = appRouter;
