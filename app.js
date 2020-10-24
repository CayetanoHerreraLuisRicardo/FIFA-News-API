/********** Importamos el módulo 'express' usado para crear nuestra API **********/
const express = require('express');
/********** Importamos el módulo 'body-parser' para analizar los cuerpos en cada solicitud o  request **********/
const parser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc/swagger.json');
/********** Importamos el módulo path para trabajar con archivos y ruta de directorios **********/
require('dotenv').config();
/********** Creamos nuestra app Express **********/
const app = express();
/********** Definimos el puerto donde va a correr nuestra app **********/
const port = process.env.PORT || '3000';
/** CORSS **/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
/********** Importamos todas las rutas **********/
const apiRouter = require('./routes/api');
/********** Cuerpo de solicitud json **********/
app.use(parser.json({ limit: '500mb' }));
/********** Cuerpo de solicitud urlencoded **********/
app.use(parser.urlencoded({ limit: '500mb', extended: false }));
/********** Ruta raiz de la API **********/
app.get('/', async (req, res) => {
    res.send("Welcome!");
});
/********** Rutas de nuestra API **********/
app.use('/api', apiRouter);
var options = {
    explorer: true
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
/********** Nuestra app esta lista para escuchar conexiones en http://localhost en el puerto seleccionado **********/
app.listen(port, () => {
    console.log(`App corriendo en http://localhost:${port}`);
    console.log(`Documentación en http://localhost:${port}/api-docs/`);
});


