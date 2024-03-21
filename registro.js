import { ManageAccount } from './firebase.js';

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const account = new ManageAccount();
  account.register(email, password);

});

console.log('Formulario de Registro');


document.getElementById('show-password').addEventListener('click', function() {
  var passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.textContent = 'Ocultar contraseña';
  } else {
      passwordField.type = 'password';
      this.textContent = 'Mostrar contraseña';
  }
});