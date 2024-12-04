const Router  = require("express")
const userController = require("../Controllers/userController")

const Rotas = Router();
const Usuarios = new  userController()

Rotas.get("/users", Usuarios.Read);
Rotas.post("/users", Usuarios.Criar);
Rotas.put('/users/:id',Usuarios.UpdateUser );
Rotas.delete('/users/:id',Usuarios.DeleteUser);

module.exports = Rotas;