import{cerrarSesionClick} from '../view-controller.js';

export const menuNavegacionHome = () => {
  //Carga de Headerhome
  const headerHome = document.createElement('div');
  const pantallaPrincipal = `
    <header>
      <div class="contenedor">
        <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"><i class="fas fa-bars"></i></label>
        <h1> Entre nosotras</h1>
        <a href='#home'><i class="far fa-comments icon"></i></a>
        <nav class="menu">
          <a href="#/home" id="btn-inicio">Configuración de cuenta</a>
          <a href="#/myprofile" id="btn-miperfil">Acerca de nosotras</a>
          <a href="#/login" id="btn-cerrar-sesion">Salir</a>     
        </nav>
      </div>
    </header>
    <footer>
      <nav>
        <a href="#/home" id="btn-inicio">hola</a>
        <a href="#/myprofile" id="btn-miperfil"></a>
        <a href="#/login" id="btn-cerrar-sesion"></a>     
      </nav>
    </footer>
  `;
  headerHome.innerHTML = pantallaPrincipal;

  //Carga de Cerrar Sesión
  const btnCerrarSesion = headerHome.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesionClick);
   return headerHome;
}