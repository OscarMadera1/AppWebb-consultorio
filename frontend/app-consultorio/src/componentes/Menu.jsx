import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link " to={"/dashboard"}>
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#configuracion-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-gear-fill" /><span>Configuración</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="configuracion-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"/roles-admin"}>
                                <i className="bi bi-circle" /><span>Roles</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Ciudades</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Especialidades</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Usuarios</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#agenda-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-calendar3" /><span>Agenda Citas</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="agenda-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Listado Citas</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#citas-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-thermometer-half" /><span>Citas Medicas</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="citas-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Reservar Citas</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </>
    );
}

export default Menu;