import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                                                <h5 className="card-title text-center pb-0 fs-4">Iniciar Sesión</h5>
                                                <p className="text-center small">Bienvenid@, ingrese sus credenciales</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Usuario</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            name="usuario"
                                                            className="form-control"
                                                            id="usuario"
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
                                                        required
                                                    />

                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Ingresar</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">No tienes cuenta? <Link to={"/crear-cuenta"}>Crea una cuenta </Link></p>
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

export default Login;