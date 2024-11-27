const Router  = require("express")
const userController = require("../Controllers/userController")

const Rotas = Router();
const Usuarios = new  userController()

Rotas.get("/users", Usuarios.Read);
Rotas.post("/users", Usuarios.Criar);

module.exports = Rotas;