document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtenemos los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        // Realiza la validación
        if (nombre.trim() === "" || email.trim() === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            // Si la validación pasa, puedes enviar el formulario o realizar otras acciones aquí
            alert("Formulario enviado correctamente.");
            formulario.reset(); // Opcional: Restablece el formulario después de enviarlo
        }
    });
});
