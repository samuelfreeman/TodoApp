const express = require('express');

const router = express.Router();

const task = require('../controllers/task');

router.post('/', task.saveTask);
router.get('/', task.getTasks);
router.get('/:id', task.singleTask);
router.delete('/:id', task.removeTask);
router.patch('/:id', task.updateTask);

module.exports = router;
