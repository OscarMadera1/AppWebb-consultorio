import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const CrearCuenta = () => {

    const [cuenta, setCuenta] = useState({
        rol: '63726ed344b6fdfa1ffc11e1',
        nombre: '',
        apellido: '',
        correo: '',
        celular:'',
        usuario:'',
        clave: '',
        estado: 1

    });

    const {nombre, apellido, correo, celular, usuario, clave} = cuenta;

    const onChange = (e) =>{
        setCuenta({
            ...cuenta,
            [e.target.name]: e.target.value

        });
    }

    const onSubmit =(e) => {
        e.preventDefault();
        crear();
    }

    const crear = () =>{
        alert('creando el usuario');

    }

    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center w-auto">

                                           
                                        </a>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Crear Cuenta</h5>
                                                <p className="text-center small">Ingrese los datos para crear la cuenta</p>
                                            </div>
                                            <form className="row g-3 needs-validation" onSubmit={onSubmit}>
                                                

                                               <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Nombre</label>
                                                    <div className="input-group has-validation">
                                                        <input type="text"
                                                            name="nombre"
                                                            className="form-control"
                                                            id="nombre"
                                                            value = {nombre}
                                                            onChange = {onChange}
                                                            required
                                                        />
                                                    </div>
                                               </div>

                                               <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Apellidos</label>
                                                    <div className="input-group has-validation">
                                                        <input type="text"
                                                            name="apellido"
                                                            className="form-control"
                                                            id="apellido"
                                                            value = {apellido}
                                                            onChange = {onChange}
                                                            required
                                                        />
                                                    </div>
                                               </div>

                                               <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Correo</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            name="correo"
                                                            className="form-control"
                                                            id="correo"
                                                            value = {correo}
                                                            onChange = {onChange}
                                                            required
                                                        />
                                                    </div>
                                               </div>

                                               <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Celular</label>
                                                    <div className="input-group has-validation">
                                                        <input type="number"
                                                            name="celular"
                                                            className="form-control"
                                                            id="celular"
                                                            value = {celular}
                                                            onChange = {onChange}
                                                            required
                                                        />
                                                    </div>
                                               </div>

                                               <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Usuario</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            name="usuario"
                                                            className="form-control"
                                                            id="usuario"
                                                            value = {usuario}
                                                            onChange = {onChange}
                                                            required
                                                        />
                                                    </div>
                                               </div>

                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Contraseña</label>
                                                    <input type="password"
                                                        name="clave"
                                                        className="form-control"
                                                        id="clave"
                                                        value = {clave}
                                                        onChange = {onChange}
                                                        required
                                                    />

                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Crear Cuenta</button>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <p className="small mb-0">
                                                        <Link to={"/"}>Regresar</Link>
                                                    </p>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">

                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    );
}

export default CrearCuenta;