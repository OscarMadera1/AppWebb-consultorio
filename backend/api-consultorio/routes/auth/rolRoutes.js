import express from "express";
const router = express.Router();
import { agregar, listar, eliminar, editar, listarUno } from "../../controllers/auth/rolController.js"