//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

//importar archivos de rutas
import rolRoutes from "./routes/auth/rolRoutes.js";
import ciudadRoutes from "./routes/auth/ciudadRoutes.js";
import usuarioRoutes from "./routes/auth/usuarioRoutes.js";
import agendaCitaRoutes from "./routes/citas_medicas/agendaCitaRoutes.js";
import especialidadRoutes from "./routes/citas_medicas/especialidadRoutes.js";
import citaAsignadaRoutes from "./routes/citas_medicas/citaAsignadaRoutes.js";

//iniciar el servidor de express
const app = express();
app.use(express.json());//para leer datos en formato json

//permitir leer archivos de variables de ambiente .env
dotenv.config();

//conectar a la base de datos de mongo
conectarDB();

//definicion de rutas o routing
app.use("/api/roles", rolRoutes);
app.use("/api/ciudades", ciudadRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/agenda-citas", agendaCitaRoutes);
app.use("/api/especialidades", especialidadRoutes);
app.use("/api/citas-asignadas", citaAsignadaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});