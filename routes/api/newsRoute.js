/************ Uris dentro de '/api/user' ************/
const router = require('express').Router();
const NewsController = require('../../controllers/newsController');
let controller = new NewsController();
router.route('/').get(controller.get);
module.exports = router;