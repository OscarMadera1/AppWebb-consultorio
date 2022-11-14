import Rol from "../../models/auth/Rol.js";

const agregar = async (req, res) => {
    //evitar roles duplicados por nombre
    const { nombreRol } = req.body;
    const existeRol = await Rol.findOne({ nombreRol });

    if (existeRol) {
        const error = new Error("Rol ya existe en la base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }

    try {
        const rol = new Rol(req.body);
        const rolGuardado = await rol.save();
        res.json({ body: rolGuardado, ok: "SI", msg: "Documento creado correctamente." });
    } catch (error) {
        console.log(error);
    }
}

const listar = async (req, res) => {
    const roles = await Rol.find();
    res.json(roles);
}

const eliminar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validar si existe el documento
    const rol = await Rol.findById(id);

    if (!rol) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    try {
        await rol.deleteOne();
        res.json({ msg: "Documento eliminado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validar si existe el documento
    const rol = await Rol.findById(id);

    if (!rol) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    //recibir los datos del formulario
    rol.nombreRol = req.body.nombreRol || rol.nombreRol;
    rol.estadoRol = req.body.estadoRol || rol.estadoRol;

    try {
        const rolGuardado = await rol.save();
        res.json({ body: rolGuardado, msg: "Documento actualizado correctamente", ok: "SI" });
    } catch (error) {
        console.log(error);
    }


}

const listarUno = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validar si existe el documento
    const rol = await Rol.findById(id);

    if (!rol) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    res.json(rol);
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}