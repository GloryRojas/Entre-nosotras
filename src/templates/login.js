import { ingresarConCorreoYContrasenaClick, ingresarConGoogleClick, cambiarHash } from '../view-controller.js'

export const iniciarSesion = () => {
  const formIniciar = document.createElement('section');
  const formLogin = `
   
      <div class='cabecera-login'>
        <img class='logo-inicio' src='img/logo.png' alt=''>
               
      </div>
      <div class='iniciar-sesion'>
      
      <form id='form-autenticacion' class='form-autenticacion' action='index.html' method='post'>
        <h4 id='error-login' class='error'></h4>
        <input class='form ' type='text' id='email' name='email' placeholder='Correo electrónico'></input>
        <input class='form' type='password' id='password' name='password' placeholder='Contraseña'></input>
        <button class='btn-login' id='btn-login' type='submit'>INICIAR SESIÓN</button>
      </form>
      <div class='iconos'>
        <button id='btn-google' class='formGoogle'><i class="fab fa-google"></i> Iniciar sesión con Google</button>
        <a id='btn-registrate'><i class="fas fa-archway"></i> ¿No tienes cuenta? Regístrate AQUI</a>
      </div>
    </div>
    <footer>
      <div>
      </div>
      <div class = "foot"><a href="https://wa.me/51964605570">
      <h1>Llamar emergencia 105</h1>
<a class ="icon"><i class="fas fa-phone-volume"></i></a>
      </div>
    </footer>
  `;
  formIniciar.innerHTML = formLogin;
    
  // Inicia sesión con Correo y contraseña
  const formAutenticacion = formIniciar.querySelector('#btn-login');
  formAutenticacion.addEventListener('click', ingresarConCorreoYContrasenaClick);

  // Inicia sesion con cuenta Google
  const btnGoogle = formIniciar.querySelector('#btn-google');
  btnGoogle.addEventListener('click', ingresarConGoogleClick);

  const btnRegister = formIniciar.querySelector('#btn-registrate');
  btnRegister.addEventListener('click', () => {
  cambiarHash('#/signup')
  });
  
  return formIniciar;
};
