const dateValue = document.getElementById('myDate');
console.log(dateValue.value);
async function datosPrueba() {
  if(dateValue.value != ""){
    const datoFecha = await dateValue.value;
    console.log(datoFecha);
  }
}
