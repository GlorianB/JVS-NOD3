const router = require("express-promise-router")();

const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodo);

router.post('/', todoController.postAddTodo);

module.exports = router;
