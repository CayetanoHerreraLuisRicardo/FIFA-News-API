/********** Importamos el módulo 'express' usado para crear nuestra API **********/
const express = require('express');
/********** Importamos el módulo 'body-parser' para analizar los cuerpos en cada solicitud o  request **********/
const parser = require('body-parser');
/********** Importamos el módulo 'swagger-ui-express' usado para generar la IU de nuestra documentación de la API hecha con swagger **********/
const swaggerUi = require('swagger-ui-express');
/********** Importamos el archivo swagger.json que tiene la documentación de nuestra API **********/
// const swaggerDocument = require('./doc/swagger.json');
require('dotenv').config();
/********** Creamos nuestra app Express **********/
const app = express();
/********** Definimos el puerto donde va a correr nuestra app **********/
const port = process.env.PORT || '3000';
/********** Middleware para el manejo de las CORSS **********/
app.use((req, res, next) => {
    // Sitio web que esta permitido conectarse a la API
    res.setHeader('Access-Control-Allow-Origin', process.env.APP_BASE_URL);
    // Metodos http permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Encabezados permitidos
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Continua al siguiente middleware
    next();
});
/********** Middleware para exponer archivos de la carpeta /public del proyecto mediante el prefijo de vía de acceso con el mismo nombre /public. **********/
app.use(process.env.APP_SWAGGER_URL, express.static(__dirname + process.env.APP_SWAGGER_URL));

/********** Importamos todas las rutas de la API**********/
const apiRouter = require('./routes/api');
/********** Cuerpo de solicitud json para soportar hasta 500 mb**********/
app.use(parser.json({ limit: '10mb' }));
/********** Cuerpo de solicitud urlencoded **********/
app.use(parser.urlencoded({ limit: '500mb', extended: false }));
/********** Ruta raiz de la API => redireccionamos a la documentación **********/
app.get('/', (req, res) => {
    // res.send("Welcome!");
    res.redirect('/api-docs');
});
/********** Rutas de nuestra API **********/
app.use('/api', apiRouter);
/********** Para cargar nuestra documentación swagger.json desde una URL **********/
var options = {
    swaggerOptions: {
        url: process.env.APP_BASE_URL + process.env.APP_SWAGGER_URL + process.env.APP_SWAGGER_FILE
    },
    explorer: true
}
/********** Ruta de nuestra documentación en swagger **********/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
/********** Nuestra app esta lista para escuchar conexiones en http://localhost en el puerto seleccionado **********/
app.listen(port, () => {
    console.log(`App corriendo en http://localhost:${port}`);
    console.log(`Documentación en http://localhost:${port}/api-docs`);
    console.log(`Archivo swagger.json en http://localhost:${port}/doc/swagger.json`);
});


