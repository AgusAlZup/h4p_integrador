// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Aquí puedes agregar lógica para validar el usuario
//     // Para este ejemplo simple, aceptamos cualquier combinación de usuario y contraseña
//     if (username && password) {
//         document.getElementById('private-link').style.display = 'inline';
//         alert('Inicio de sesión exitoso');
//     } else {
//         alert('Por favor, ingrese usuario y contraseña');
//     }
// }

// script.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar si el usuario y la contraseña son 'admin'
    if (username === 'admin' && password === 'admin') {
        document.getElementById('private-link').style.display = 'inline';
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}