export const asesory = () => {
    const miPerfil = document.createElement('div');
    const datosUsuario = `
    <section id="id_publicaciones" class="formPost" >
    <h3 >Asesoría</h3><br>
    <div class="text-boton-post">
        <div type= "textfield" id="id-publicacion" class="id-publicacion" autofocus>
        <img src= "./img/legalother.jpg" class = "asesoria">
        </div>
    </div>
    <div class="text-boton-post">
        <div type= "textfield" id="id-publicacion" class="id-publicacion" autofocus>
        <img src= "./img/psicologico.jpg" class = "asesoria">
        <a href =""
        </div>
    </div>
    <div class="text-boton-post">
    <div type= "textfield" id="id-publicacion" class="id-publicacion" autofocus>
    <img src= "./img/documentacion.jpg" class = "asesoria">
    </div>
</div>
</section>
<footer>
      <nav>
      <div class = "iconos">
          <a href="#/home" id="btn-inicio" class ="imagenes"><img src="https://img.icons8.com/ios/50/000000/home.png"></a>
          <a href="#/asesory" id="btn-miperfil" class ="imagenes"><img src="https://img.icons8.com/dotty/80/000000/office-worker-in-a-suit-female.png"></a>
          <a href="#/agenda" id="btn-cerrar-sesion" class ="imagenes"><img src="https://img.icons8.com/ios/50/000000/address-book.png"></a>
          <a href="tel:100" id="btn-inicio" class ="imagenes"><img src="https://img.icons8.com/cotton/64/000000/hot-line.png"></a>
      </nav>
    </footer>
    `;
    miPerfil.innerHTML = datosUsuario;
    return miPerfil;
};