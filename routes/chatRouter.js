const router = require("express-promise-router")();

const chatController = require('../controllers/chatController');

router.get('/', chatController.getChat);

module.exports = router;
