/************ Manejo de rutas en nuestra API ************/
const router = require('express').Router();
/************ Importamos las diferentes rutas a manejar en nuestra API ************/
const newsRoute = require('./api/newsRoute');
router.use('/news', newsRoute);

module.exports = router;