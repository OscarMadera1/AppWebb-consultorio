import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import RolesAdmin from './paginas/configuracion/RolesAdmin';
import RolesCrear from './paginas/configuracion/RolesCrear';
import RolesEditar from './paginas/configuracion/RolesEditar';
import DashBoard from './paginas/DashBoard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/crear-cuenta' exact element={<CrearCuenta />} />
          <Route path='/dashboard' exact element={<DashBoard />} />
          <Route path='/roles-admin' exact element={<RolesAdmin />} />
          <Route path='/roles-crear' exact element={<RolesCrear />} />
          <Route path='/roles-editar/:id' exact element={<RolesEditar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
