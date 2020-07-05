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
    if (requiereNombre(document.getElementById('nombre')) &&
        requiereMail(document.getElementById('mail')) &&
        requiereConsulta(document.getElementById('consulta'))
    ) {
        enviarMail();
    } else {
        alert("ocurrio un error");
    }
}

function enviarMail() {
    let template_params = {
        to_name: "Luciano Gramajo",
        from_name: `soy `+ document.getElementById('nombre').value,
        message_html: `Email: ${document.getElementById('mail').value} - Consulta: ${document.getElementById('consulta').value}`
    }

    let service_id = "default_service";
    let template_id = "template_b3D0I4DV";
    emailjs.send(service_id, template_id, template_params);
}