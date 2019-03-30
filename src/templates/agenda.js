export const cargarMiPerfil = () => {
    const miPerfil = document.createElement('div');
    const datosUsuario = `
      <div class="categories-grid wow fadeInLeft">
        <nav class="">
          <ul class="filter">
            <li><a href="" class="active" data-filter="*">Todos</a></li>
            <li><a href="" data-filter=".sexual">Sexual</a></li>
            <li><a href="" data-filter=".laboral">Laboral</a></li>
            <li><a href="" data-filter=".ciber">Ciberacoso</a></li>
          </ul>
        </nav>
      </div>
      <div class='help'>
        <div clas='box sexual'>
          <h3>Comisaria Apolo</h3>
          <h5>Lima - La Victoria</h5>
          <h5>Jr. 3 de febrero N° 1050,  Distrito de La Victoria</h5>
          <h5>CEM: Rondon Yepez Pavel Rodolfo</h5>
          <h5>Cel: 929193270</h5>
          <a href=''>Centros de Emergencia Mujer</a>
        </div>
        <div clas='box laboral'>
          <h3>Trabaja sin acoso</h3>
          <h5>¿ESTÁS SIENDO ACOSADA(O)? ¿SABÍAS QUE PUEDES DETENER A TU HOSTIGADOR(A)?</h5>
          <h5>El ministerio de trabajo y promocion del empleo pone a disposicion de los peruanos una plataforma para la prevención y sanción del hostigamiento sexual en el lugar de trabajo en el sector público y privado.</h5>
          <a href='http://trabajasinacoso.trabajo.gob.pe/tesths/inicio'>trabajasinacoso.pe</a>
        </div>
        <div clas='box ciber'>
          <h3>Comisaria Apolo</h3>
          <h5>Lima - La Victoria</h5>
          <h5>Jr. 3 de febrero N° 1050,  Distrito de La Victoria</h5>
          <h5>CEM: Rondon Yepez Pavel Rodolfo</h5>
          <h5>Cel: 929193270</h5>
          <a href='http://www.noalacosovirtual.pe/formulario/registro-alerta.php'>Centros de Emergencia Mujer</a>
        </div>
      </div>
    `;
    miPerfil.innerHTML = datosUsuario;
    return miPerfil;
};