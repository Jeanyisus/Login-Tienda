document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de los campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí podrías agregar lógica para validar las credenciales del usuario
    // Por ahora, solo verificamos si ambos campos no están vacíos

    if (username && password) {
        // Oculta el formulario y muestra el mensaje de bienvenida
        document.querySelector('.login-container').innerHTML = '<h1>¡Bienvenido a Innovatec!</h1>';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
