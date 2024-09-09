# Routes, middlewares y CRUD
Vamos a crear una aplicación en la que podremos crear usuarios, leerlos y buscarlos

El funcionamiento es sencillo. En la home habrá un input de búsqueda. Escribiremos el nombre del usuario, si existe llevará a la página con el usuario y sino existe nos dará que el usuario no existe. Todo esto pasará por un verificador que lo verifique.

Como manejaremos json y req.body necesitaremos parsearlo. Usaremos estas dos líneas de código.

```js
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
```

## Comenzaremos creando las rutas
- En `/` aparecerán todos los usuarios en el navegador y un input para buscarlos.
- En `/users` estarán todas las rutas de usuario. Crearemos usuarios y tendremos una ruta donde estarán todos en formato json. También podremos entrar en cada uno de ellos. Por tanto: 
* `/users` estará el json de usaurios
* `/users/:user` estará la respuesta en navegador `res.send()` del usuario
* `/users/create`se crearán usuarios en users

También crearemos una página de error `/error` para cuando el usuario no exista y además una página de `404`. Serán páginas distintas. En una no encontrará el usuario y la otra no encontrará la página.
En la ruta de `/error` debe aparecer un mensaje de error donde no existe el usuario y de nuevo el input para buscar (como en la home).

- También crearemos un middleware que valorara si el usuario está o no en la BBDD (el array que se pasa abajo, junto con los usuarios creados por nosotros). Si no está pasará a la página de error y si está pasara a la ruta `/users/:user`pero con respuesta en navegador `res.send()`

```js
const users = [
  {id: 1, name: "Carlos", age: "28", departament: "Develop"},
  {id: 2, name: "Reyes", age: "23", departament: "Develop"},
  {id: 3, name: "Ana", age: "42", departament: "Marketing"},
  {id: 4, name: "Mamen", age: "28", departament: "RRHH"},
  {id: 5, name: "Juan", age: "28", departament: "RRHH"}
]

module.exports = users
```

- Crea un endpoint para crear usuarios. Puedes hacerlo desde POSTMAN el crear los usuarios.

### BONUS
- Crea las rutas para actualizar y borrar
- Crea inputs para no usar POSTMAN para crear y actualizar. Elige las rutas
- Crea algo en la home, en cada usuario, que la clickar vaya a la ruta `/users/delete/` elimine el usuario y haga un redirect a `/` sin el usuario eliminado. Recuerda el `filter` para "eliminar el usuario". Podrías pasar el ID para hacerlo.