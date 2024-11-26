import { Router } from "express";
import userController from "../Controllers/userController"

const Rotas = Router();

Rotas.get("/users", userController.BuscarUsuario);
Rotas.post("/users", BuscarUsuario.CriarUsuario);

export default Rotas;