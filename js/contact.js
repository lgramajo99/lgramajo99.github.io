function requiereNombre(input) {
    if (input.value) {
        input.className = "form-control is-valid"
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}

function requiereMail(input) {
    let expresion = /\w+@\w+\.[a-z]/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function requiereConsulta() {
    if (consulta.value.length >= 15) {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }
}

function validacionGeneral(event) {
    event.preventDefault();
    console.log("desde la funcion validar general" + event)
    if (requerido(document.getElementById('nombre')) &&
        revisarEmail(document.getElementById('mail')) &&
        revisarConsulta(document.getElementById('consulta'))
) {
        alert("El formulario esta listo para ser enviado");
    } else {
        alert("ocurrio un error");
    }
}