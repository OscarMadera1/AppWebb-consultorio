import React from 'react';
import { Link } from "react-router-dom";

const BreadCrumd = ({ BreadCrumd1, BreadCrumd2, BreadCrumd3, ruta }) => {
    return (
        <>
            <div className="pagetitle">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">{BreadCrumd1}</li>
                        {BreadCrumd2 === "" ? <li>&nbsp;</li> : <li className="breadcrumb-item"><Link to={ruta}>{BreadCrumd2}</Link></li>}
                        {BreadCrumd3 === "" ? <li>&nbsp;</li> : <li className="breadcrumb-item active">{BreadCrumd3}</li>}
                    </ol>
                </nav>
            </div>
        </>
    );
}

export default BreadCrumd;