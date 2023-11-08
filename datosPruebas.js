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

document.querySelector('form')
  .addEventListener('submit', e => {
    e.preventDefault(); // prevent form from submitting normally
    const data = Object.fromEntries(
      new FormData(e.target)
    )
    alert(JSON.stringify(data))
  })