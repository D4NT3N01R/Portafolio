// Obtener los elementos de entrada y el botón
const nameInput = document.getElementById("nombreyapellido");
const email = document.getElementById("CorreElecr");
const affair = document.getElementById("theme");
const message = document.getElementById("mensaje");
const sent = document.getElementById("enviarbtn");

const alertName = document.getElementById("alert_nombre");
const alertEmail = document.getElementById("alert_correo");
const alertAsunto = document.getElementById("alert_asunto");
const alertMessage = document.getElementById("alert_msj");

// Agregar event listener a los campos de entrada
nameInput.addEventListener("input", validarCampos);
email.addEventListener("input", validarCampos);
affair.addEventListener("input", validarCampos);
message.addEventListener("input", validarCampos);

// Validar campos
function validarCampo(input, alertElement) {
    const isValid = input.value.trim() !== "";
    alertElement.style.display = isValid ? "none" : "flex";
    alertElement.style.color = isValid ? "initial" : "red";
    input.style.borderColor = isValid ? "green" : "red";
    return isValid;
}

// Validar todos los campos
function verificarInputs() {
    const isValidName = validarCampo(nameInput, alertName);
    const isValidEmail = validarCampo(email, alertEmail);
    const isValidAffair = validarCampo(affair, alertAsunto);
    const isValidMessage = validarCampo(message, alertMessage);

    const allInputsAreOk = isValidName && isValidEmail && isValidAffair && isValidMessage;

    sent.disabled = !allInputsAreOk;
    sent.style.borderColor = allInputsAreOk ? "green" : "red";

    return allInputsAreOk;
}

// Limpiar el formulario y mostrar mensaje de envío

// Validar campos antes de enviar
function validarCampos(event) {
    event.preventDefault();

    if (!verificarInputs()) {
        event.preventDefault();
    } else {
        sent.innerText = "Mensaje enviado";
        limpiarForm();
    }
}
