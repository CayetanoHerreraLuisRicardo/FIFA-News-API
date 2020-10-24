<h1 align="center">FIFA-News-API</h1>


Este pequeño proyecto parte de la idea que me nació hace un par de años por hay del 2015 en mis ultimos semestres en la univerdad, el cual consiste sacar provecho del contenido que hay en la internet como son los feeds o canales RSS que vienen siendo el equivalente a páginas de Internet, pero diseñados para ser leídos e interpretados por terceros, que a su vez pueden presentar la información en un sinnúmero de maneras. También son conocidos como canales XML, por el tipo de formato. Este proyecto lo pueden encontrar en el siguiente repositorio: https://github.com/CayetanoHerreraLuisRicardo/AppNoticia en su momento se uso .NET C# y fue desarrollado para aplicaciones de windows phone y de escritorio.


Dado lo anterior y despues de haber leido y aceptado los terminos y codiciones de *`FIFA.com`* decidí subir este pequeño proyecto a github para contribuir y compartir con esta comunidad lo facil que es sacarle jugo a las fuentes RSS. 

Las fuentes RSS o Feeds de *`FIFA.com`* se encuentran en el siguiente enlace: https://www.fifa.com/rss-feeds/ el cual cuenta con una gran varidad de feeds de noticias hacerca del mundo del futbol.

Este proyecto desarrollado en NodeJS consiste en tomar los RSS de *`FIFA.com`* como la fuente original, parsear el contenido a un formato mas amigable como lo es JSON.

### Demo 
- Clic aqui para hacer uso del [Live Demo](https://fifa-news-api.herokuapp.com)


### Requisitos previos
- Instalar [Node.js] el cual incluye [Node Package Manager][npm]

### Dependencias
- body-parser
- dotenv
- express
- rss-parser
- swagger-ui-express

### Correr API NodeJS 
Clonar reporsitorio

```
git clone https://github.com/CayetanoHerreraLuisRicardo/FIFA-News-API.git
```

Instalar dependencias
```
npm install
```

Si todo sale bien, podras ver la documentación de la API en: http://localhost:3000/api-docs/

![swagger-1](https://github.com/CayetanoHerreraLuisRicardo/FIFA-News-API/blob/main/public/images/screenshot-swagger1.png)

Tambien pueden consumir la API desde esta documentación para ver como funciona, enviando los parametros y viendo lo que la API regresa.

![swagger-2](https://github.com/CayetanoHerreraLuisRicardo/FIFA-News-API/blob/main/public/images/screenshot-swagger2.png)