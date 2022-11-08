import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    idRol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rol",
        require: true,
        trim: true
    },

    idCiudad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ciudad",
        require: true,
        trim: true
    },

    nombresUsuario: {
        type: String,
        require: true,
        trim: true
    },

    apellidosUsuario: {
        type: String,
        require: true,
        trim: true
    },

    correoUsuario: {
        type: String,
        require: true,
        trim: true
    },

    celularUsuario: {
        type: Number,
        require: true,
        trim: true
    },

    direccionUsuario: {
        type: String,
        require: true,
        trim: true
    },

    generoUsuario: {
        type: Number,
        require: true,
        trim: true
    },

    tipoDocumentoUsuario: {
        type: Number,
        require: true,
        trim: true
    },

    documentoUsuario: {
        type: Number,
        require: true,
        trim: true
    },

    edadUsuario: {
        type: Number,
        require: true,
        trim: true
    },

    fechaNacimientoUsuario: {
        type: String,
        require: false,
        trim: true
    },

    usuarioAcceso: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },

    claveAcceso: {
        type: String,
        require: true,
        trim: true
    },

    estadoUsuario: {
        type: Number,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});
const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;