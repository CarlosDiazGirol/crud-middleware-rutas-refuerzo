const express = require("express")
const app = express()
const users = require("./routes/users")
const templateGenerator = require("./utils/template")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(templateGenerator())
})

app.use("/users", users)

app.get("/error", (req, res) => {
  const err = req.path
  res.send(templateGenerator(err))
})


app.use((req, res) => {
  const path = req.path
  res.status(404).send(`Page not found! ${path}`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`está escuchando en el puerto http://localhost:${PORT}`))