const express = require('express');

const router = express.Router();

const task = require('../controllers/task');

router.get('/', task.getTasks);
router.get('/:id', task.singleTask);
router.post('/', task.saveTask);
router.delete('/:id', task.removeTask);
router.patch('/:id', task.updateTask);

module.exports = router;
