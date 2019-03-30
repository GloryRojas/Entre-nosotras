import{cerrarSesionClick} from '../view-controller.js';

export const menuNavegacionHome = () => {
  //Carga de Headerhome
  const headerHome = document.createElement('div');
  const pantallaPrincipal = `
    <header>
      <div class="contenedor">
        <input type="checkbox" id="btn-menu"><label for="btn-menu" class="icon-menu"><i class="fas fa-bars"></i></label>
        <img src="./img/logoprin.jpg" class="logito">
        <input type="checkbox"  id="btn-comments"><label for="btn-comments" class="icon-menu"><i class="far fa-comments icon"></i></label>
        <nav class="menu">
          <a href="#/home" id="btn-inicio">Configuración de cuenta</a>
          <a href="#/agenda" id="btn-miperfil">Acerca de nosotras</a>
          <a href="#/login" id="btn-cerrar-sesion">Salir</a>     
        </nav>
        <nav class="menue">
        <a href="https://wa.me/51997837911" id="btn-inicio">Acoso laboral</a>
        <a href="https://wa.me/51982544101" id="btn-miperfil">Ciberacoso</a>
        <a href="https://wa.me/51935714773 id="btn-cerrar-sesion">Acoso callejero</a>   
        <a href="https://wa.me/51982544101" id="btn-cerrar-sesion">Acoso sexual</a>     
        <a href="https://wa.me/51997837911" id="btn-cerrar-sesion">Acoso físico</a>       
      </nav>
      </div>
    </header>
    <footer>
      <nav>
      <div class = "iconos">
          <a href="#/home" id="btn-inicio" class ="imagenes"><img src="https://img.icons8.com/ios/50/000000/home.png"></a>
          <a href="#/myprofile" id="btn-miperfil" class ="imagenes"><img src="https://img.icons8.com/dotty/80/000000/office-worker-in-a-suit-female.png"></a>
          <a href="#/login" id="btn-cerrar-sesion" class ="imagenes"><img src="https://img.icons8.com/ios/50/000000/address-book.png"></a>
          <a href="tel:+51100 id="btn-inicio" class ="imagenes"><img src="https://img.icons8.com/cotton/64/000000/hot-line.png"></a>
      </nav>
    </footer>
  `;
  headerHome.innerHTML = pantallaPrincipal;

  //Carga de Cerrar Sesión
  const btnCerrarSesion = headerHome.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesionClick);
   return headerHome;
}