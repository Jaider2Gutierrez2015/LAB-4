function validarFormulario(event) {
    event.preventDefault(); 
    const nombre = document.getElementById("Nombre").value.trim();
    const correo = document.getElementById("Correo").value.trim();
    const asunto = document.getElementById("Asunto").value.trim();
    const mensaje = document.getElementById("Mensaje").value.trim();

    if (nombre.length >= 2 && validarCorreo(correo) && asunto.length >= 2 && mensaje.length >= 5) {
        const mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.style.display = "block";

        document.getElementById("formularioContacto").reset();
        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 5000);
    } else {
        alert("Por favor, completa todos los campos correctamente antes de enviar.");
    }
}
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
