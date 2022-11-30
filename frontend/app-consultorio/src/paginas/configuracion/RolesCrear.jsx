import React, { useState, useEffect } from 'react';
import BreadCrumd from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensajesFlotantes from '../../helpers/mensajesFlotantes.js';
import { useNavigate } from "react-router-dom";

const RolesCrear = () => {
    const navigate = useNavigate();

    const [roles, setRoles] = useState({
        nombre: '',
        estado: dominios.ESTADO_ACTIVO_ROL
    });

    const { nombre } = roles;

    const onChange = (e) => {
        setRoles({
            ...roles,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById('nombre').focus();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        crear();
    }

    const crear = async () => {
        const body = {
            nombreRol: roles.nombre,
            estadoRol: roles.estado
        }
        const response = await APIInvoke.invokePOST(`/api/roles`, body);

        if (response.ok === "SI") {
            mensajesFlotantes('success', response.msg);
            navigate("/roles-admin");
        } else {
            mensajesFlotantes('error', response.msg);
        }

    }

    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main id="main" className="main">
                <BreadCrumd
                    BreadCrumd1={"Configuración"}
                    BreadCrumd2={"Listado Roles"}
                    BreadCrumd3={"Crear Roles"}
                    ruta={"/roles-admin"}
                />

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Crear Rol</h5>
                                        <form onSubmit={onSubmit}>

                                            <div className="row mb-3">
                                                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre</label>
                                                <div className="col-sm-10">
                                                    <input type="text"
                                                        className="form-control"
                                                        id="nombre"
                                                        name="nombre"
                                                        value={nombre}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-center">
                                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default RolesCrear;