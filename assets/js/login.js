const loginForm = document.getElementById('loginForm');
const emailInput = document.querySelector('.login__form__usuario');
const passwordInput = document.querySelector('.login__form__password');
const errorCorreo = document.getElementById('errorCorreo');
const errorPassword = document.getElementById('errorPassword');

// Expresión regular para validar el correo electrónico
const regexCorreo = /^[\w-]+(\.[\w-]+)*@([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}$/;

function validarCorreo() {
    const correo = emailInput.value.trim();
    if (correo === '') {
        errorCorreo.textContent = 'Por favor, ingresa tu correo electrónico.';
    } else if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = 'Por favor, ingresa un correo electrónico válido.';
    } else {
        errorCorreo.textContent = '';
    }
}

function validarFormulario() {
    const correo = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let hayErrores = false;

    // Limpiar mensajes de error previos
    errorCorreo.textContent = '';
    errorPassword.textContent = '';

    // Validar campo de correo
    if (correo === '') {
        errorCorreo.textContent = 'Por favor, ingresa tu correo electrónico.';
        hayErrores = true;
    } else if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = 'Por favor, ingresa un correo electrónico válido.';
        hayErrores = true;
    }

    // Validar campo de contraseña
    if (password === '') {
        errorPassword.textContent = 'Por favor, ingresa tu contraseña.';
        hayErrores = true;
    }

    // Si hay errores, evita el envío del formulario
    if (hayErrores) {
        return false;
    }

    // Si el formulario es válido, redirigir a index.html
    window.location.href = "index.html";
}

// Agregar evento de escucha al campo de correo electrónico
emailInput.addEventListener('input', validarCorreo);

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente
    validarFormulario();
});

