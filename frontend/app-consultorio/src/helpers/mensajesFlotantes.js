import Swal from 'sweetalert2';

const mensajesFlotantes = (icono, msg) => {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: msg,
        showConfirmButton: false,
        timer: 1500
    });
}

export default mensajesFlotantes;