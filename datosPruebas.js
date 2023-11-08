const dateValue = document.getElementById('myDate');
const btnPagoTransferencia = document.querySelector(".transferencia");
const btnPagoEfectivo = document.querySelector(".efectivo");
let pagoSeleccionado;
console.log(btnPagoEfectivo);
console.log(btnPagoTransferencia);
console.log(dateValue.value);
async function datosPrueba() {
  if(dateValue.value != ""){
    const datoFecha = await dateValue.value;
    console.log(datoFecha);
  }
}

// document.querySelector('form')
//   .addEventListener('submit', e => {
//     e.preventDefault(); // prevent form from submitting normally
//     const data = Object.fromEntries(
//       new FormData(e.target)
//     )
//     alert(JSON.stringify(data))
//   })

  // function datosSeleccionados() {
  //   document.querySelector('form').addEventListener('submit', e => {
  //     e.preventDefault(); // prevenir el envío del formulario de forma predeterminada
  //     const data = Object.fromEntries(new FormData(e.target));
  //     const dataString = JSON.stringify(data);
      
  //     // Muestra un cuadro de diálogo de confirmación
  //     const userConfirmed = window.confirm(dataString);
  
  //     if (userConfirmed) {
  //       document.getElementById('dialog').close();
  //     }
  //   });
  // }
  function datosSeleccionados() {
    const form = document.querySelector('form');
    const data = new FormData(form);
  
    // Validación de datos
    if (data != null) {
      // Supongamos que los datos son válidos
  
      // Envío de datos al servidor (esto requiere un servidor en el lado del servidor)
      // Aquí puedes usar AJAX (por ejemplo, Fetch API) para enviar los datos al servidor
  
      // Mostrar un mensaje de éxito
      alert('Datos enviados con éxito.');
      document.getElementById('dialog').close();
      // Limpiar los campos del formulario
      form.reset();
    } else {
      alert('Por favor, complete los campos requeridos.');
    }
    return false;
  }