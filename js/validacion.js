function validarFormulario(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Obtén los valores de los campos
    const nombre = document.getElementById("Nombre").value.trim();
    const correo = document.getElementById("Correo").value.trim();
    const asunto = document.getElementById("Asunto").value.trim();
    const mensaje = document.getElementById("Mensaje").value.trim();

    // Validación básica de campos
    if (nombre.length >= 2 && validarCorreo(correo) && asunto.length >= 2 && mensaje.length >= 5) {
        // Mostrar mensaje de éxito
        const mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.style.display = "block";

        // Limpia los campos del formulario (opcional)
        document.getElementById("formularioContacto").reset();

        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 5000);
    } else {
        alert("Por favor, completa todos los campos correctamente antes de enviar.");
    }
}

// Función para validar el formato del correo
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
