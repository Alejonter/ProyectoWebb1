//carga de la funcion init 
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    //declaracion de variables
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numeroTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //funcion del boton Enviar
    btnEnviar.onclick = function () {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numeroTxt.value;
        mensaje = mensajeTxt.value;
        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && apellido === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (nombre === '') {
            alerta.textContent = 'El campo Nombre esta vacio.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (apellido === '') {
            alerta.textContent = 'El campo Apellido esta vacio.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo Email esta vacio.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email)=== false) {
            alerta.textContent = 'Email invalido.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (numero === '') {
            alerta.textContent = 'El campo Numero esta vacio.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje esta vacio.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo 
            alerta.textContent = 'Mensaje enviado. Pronto le confirmamos!';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //carga de la libreria
            //service ID/template ID/ID form/public key
            //el id del formulario es #form
            emailjs.sendForm('service_4yk70qv', 'template_pzt6rhe', '#form1', 'To_QvsiNsunbBUWc4');
            //carga de la funcion limpiar
            limpiar();
        }
    }
    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numeroTxt.value = '';
        mensajeTxt.value = '';
    }

}

