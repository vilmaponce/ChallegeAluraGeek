// validate.js

function validarFormulario() {
    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Expresión regular para validar que solo se ingresen letras en el campo de Nombre Completo
    var regexSoloLetras = /^[a-zA-Z\s]+$/;

    // Ocultar mensajes de error previos
    document.getElementById('errorNombre').style.display = 'none';
    document.getElementById('errorTextarea').style.display = 'none';

    // Función para mostrar el mensaje de error
    function mostrarError(elemento, mensaje) {
        elemento.textContent = mensaje;
        elemento.style.display = 'inline';
    }

    // Verificar si el campo de Nombre Completo está vacío o contiene caracteres inválidos
    if (nombreCompleto.trim() === '') {
        mostrarError(document.getElementById('errorNombre'), 'Por favor, ingresa tu nombre completo.');
        return false; // Evitar el envío del formulario
    } else if (!regexSoloLetras.test(nombreCompleto)) {
        mostrarError(document.getElementById('errorNombre'), 'El nombre debe contener solo letras.');
        return false; // Evitar el envío del formulario
    }

    // Verificar si el campo de Mensaje está vacío
    if (mensaje.trim() === '') {
        mostrarError(document.getElementById('errorTextarea'), 'Por favor, ingresa un mensaje.');
        return false; // Evitar el envío del formulario
    }

    // Verificar si se ha alcanzado el límite de caracteres en el textarea
    var limiteCaracteres = 200;
    var caracteresRestantes = limiteCaracteres - mensaje.length;
    document.getElementById('contadorCaracteres').textContent = caracteresRestantes + '/' + limiteCaracteres + ' caracteres';

    // Si todo está bien, permitir el envío del formulario
    return true;
}


