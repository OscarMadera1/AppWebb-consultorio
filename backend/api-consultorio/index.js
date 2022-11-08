//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

//iniciar el servidor de express
const app = express();

//permitir leer archivos de variables de ambiente .env
dotenv.config();

//conectar a la base de datos de mongo
conectarDB();

//definicion de rutas o routing
app.use("/", (req, res) => {
    res.send("hola como estas");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});