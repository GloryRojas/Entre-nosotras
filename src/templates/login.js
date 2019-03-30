import { ingresarConCorreoYContrasenaClick, ingresarConGoogleClick, ingresarConFacebookClick, cambiarHash } from '../view-controller.js'

export const iniciarSesion = () => {
  const formIniciar = document.createElement('section');
  const formLogin = `
    <div class='iniciar-sesion'>
      <div class='cabecera-login'>
        <img class='logo-inicio' src='img/logo.png' alt=''>
        <h2 class='titulo-inicio'>Entre Nosotras</h1>
        <span class='slogan'>Comparte tus conocimientos y aprende de otros</span>
      </div>
      <form id='form-autenticacion' class='form-autenticacion' action='index.html' method='post'>
        <h4 id='error-login' class='error'></h4>
        <input class='form ' type='text' id='email' name='email' placeholder='Correo electrónico'></input>
        <input class='form' type='password' id='password' name='password' placeholder='Contraseña'></input>
        <button class='btn-login' id='btn-login' type='submit'>INICIAR SESIÓN</button>
      </form>
      <div class='iconos'>
        <button id='btn-google' class='formGoogle'><i class="fab fa-google"></i> Iniciar sesión con Google</button>
        <a id='btn-registrate'>¿No tienes cuenta? Regístrate AQUI</a>
      </div>
    </div>
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
