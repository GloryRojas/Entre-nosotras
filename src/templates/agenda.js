export const cargarMiPerfil = () => {
    const miPerfil = document.createElement('div');
    const datosUsuario = `
      <div class="option">
        <h2 style="text-align: center">AGENDA CENTROS DE AYUDA</h2>
        <div class="help">
          <table class="table-agend">
            <tr class="boxing">
              <th><a href=''><h3>Policía</h3></a></th>
              <th><a href=''><h3>LÍNEA 100</h3></a></th>
              <th><a href=''><h3>LÍNEA 106 SAMU Ambulancia</h3></a></th>
            </tr>
            <tr class="boxing">
              <td><a href=''><h3>Ministerio de la Mujer</h3></a></td>
              <td><a href=''><h3>Bombero</h3></a></td>
              <td><a href=''><h3>Abogados de oficio</h3></a></td>
            </tr>
            <tr class="boxing">
              <td><a href=''><h3>Serenazgo</h3></a></td>
              <td><a href=''><h3>Servicios de Atención Urgente</h3></a></td>
              <td><a href=''><h3>Hogares Refugio</h3></a></td>
            </tr>
          </table>
        </div>
      <div>
    `;
    miPerfil.innerHTML = datosUsuario;
    return miPerfil;
};