const users = require("../BBDD/usersList")

const validateUserBody = (req, res, next) => {
  const userName = req.body.name
  const userExist = users.some(user => user.name.toLowerCase() === userName.toLowerCase())

  if(!userExist) {
    console.log(`Usuario no encontrado en el body: ${userName}`)
    res.redirect("/error")
  } else {
    console.log(`Usuario encontrado en el body: ${userName}`)
    next()
  }
}

const validateUserParams = (req, res, next) => {
  const userName = req.params.user
  const userExist = users.some(user => user.name.toLowerCase() === userName.toLowerCase())
  if(!userExist) {
    console.log(`Usuario no encontrado en la URL: ${userName}`)
    res.redirect("/error")
  } else {
    console.log(`Usuario encontrado en la URL: ${userName}`)
    next()
  }
}

module.exports = {validateUserBody, validateUserParams}