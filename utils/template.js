const users = require("../BBDD/usersList")

const templateGenerator = (path) => {
  const template = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      ${ path === "/error" && "Usuario no encontrado, inténtalo de nuevo" || "" }
      <form action="/users" method="POST">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required></input>
      <button type="submit">Enviar</button>
      </form>
      <ul>
      ${users.map(user => `<li>${user.name}</li>`).join("")}
      </ul>
      </body>
    </html>  
  `
  return template
}

module.exports = templateGenerator