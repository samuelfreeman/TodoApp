const express = require('express');

const router = express.Router();

const user = require('../controllers/user');

router.get('/', user.getUsers);
router.get('/:id', user.singleUser);
router.post('/', user.saveUser);
router.delete('/:id', user.removeUser);
router.patch('/:id', user.updateUser);

module.exports = router;
