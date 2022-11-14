import Ciudad from "../../models/auth/Ciudad.js";

const agregar = async (req, res) => {
    //evitar ciudades duplicadas por nombre
    const { nombreCiudad } = req.body;
    const existeCiudad = await Ciudad.findOne({ nombreCiudad });

    if (existeCiudad) {
        const error = new Error("Ciudad ya existe en la base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }

    try {
        const ciudad = new Ciudad(req.body);
        const ciudadGuardada = await ciudad.save();
        res.json({ body: ciudadGuardada, msg: "Documento creado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const listar = async (req, res) => {
    const ciudades = await Ciudad.find();
    res.json(ciudades);
}

const eliminar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validamos si existe el documento por el id
    const ciudad = await Ciudad.findById(id);

    if (!ciudad) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });
    }

    try {
        await ciudad.deleteOne();
        res.json({ msg: "Documento eliminado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validamos si existe el documento por el id
    const ciudad = await Ciudad.findById(id);

    if (!ciudad) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });
    }

    //recibir los datos del formulario
    ciudad.nombreCiudad = req.body.nombreCiudad || ciudad.nombreCiudad;

    try {
        const ciudadGuardada = await ciudad.save();
        res.json({ body: ciudadGuardada, msg: "Documento actualizado correctamente", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const listarUno = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;

    //validamos si existe el documento por el id
    const ciudad = await Ciudad.findById(id);

    if (!ciudad) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });
    }

    res.json(ciudad);
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}