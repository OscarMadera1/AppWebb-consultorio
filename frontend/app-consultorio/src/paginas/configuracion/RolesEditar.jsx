import React, { useState, useEffect } from 'react';
import BreadCrumd from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensajesFlotantes from '../../helpers/mensajesFlotantes.js';
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const RolesEditar = () => {
    //capturar id de la url
    const { id } = useParams();

    const navigate = useNavigate();

    const [roles, setRoles] = useState({
        nombre: '',
        estado: ''
    });

    const { nombre, estado } = roles;

    const onChange = (e) => {
        setRoles({
            ...roles,
            [e.target.name]: e.target.value
        });
    }

    const listarUno = async () => {
        const response = await APIInvoke.invokeGET(`/api/roles/${id}`);
        setRoles({
            nombre: response.nombreRol,
            estado: response.estadoRol
        });
    }

    useEffect(() => {
        listarUno();
        document.getElementById('nombre').focus();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        editar();
    }

    const editar = async () => {
        const body = {
            nombreRol: roles.nombre,
            estadoRol: roles.estado
        }
        const response = await APIInvoke.invokePUT(`/api/roles/${id}`, body);

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
                    BreadCrumd3={"Editar Roles"}
                    ruta={"/roles-admin"}
                />

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Editar Rol</h5>
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
                                                <label htmlFor="nombre" className="col-sm-2 col-form-label">Seleccione un estado</label>
                                                <div className="col-sm-10">
                                                    <Form.Select aria-label="estado"
                                                        style={{ cursor: 'pointer' }}
                                                        id="estado"
                                                        name="estado"
                                                        value={estado}
                                                        onChange={onChange}
                                                    >
                                                        <option value="1">ACTIVO</option>
                                                        <option value="2">INACTIVO</option>
                                                    </Form.Select>
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

export default RolesEditar;