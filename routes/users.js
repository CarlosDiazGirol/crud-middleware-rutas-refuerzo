const express = require("express")
const router = express.Router()
const { validateUserBody, validateUserParams } = require("../middlewares/validateUsers")

const users = require("../BBDD/usersList")

let nextId = users.length + 1

router.post("/", validateUserBody, (req, res) => {
  const name = req.body.name
  res.redirect(`/users/${name}`)
})

router.get("/:user",validateUserParams, (req, res) => {
  const user = req.params.user
  res.send(`hola ${user}`)
})

//CRUD
router.get("/", (req, res) => {
  res.json(users)
})

router.post("/create", (req, res) => {
  const newUser = {
    id: nextId++,
    name: req.body.name,
    age: req.body.age,
    departament: req.body.departament
  }
  users.push(newUser)
  res.status(201).redirect("/")
})

module.exports = router