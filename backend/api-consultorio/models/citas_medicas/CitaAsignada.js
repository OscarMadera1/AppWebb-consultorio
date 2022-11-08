import mongoose from "mongoose";

const citaAsignadaSchema = mongoose.Schema({
    idAgendaCita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgendaCita",
        require: true,
        trim: true
    },

    idPaciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgendaCita",
        require: true,
        trim: true
    }
}, {
    timestamps: true
});
const citaAsignada = mongoose.model("citaAsignada", citaAsignadaSchema);
export default citaAsignada;