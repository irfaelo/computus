<script>
function calcularFechaPascua(anio) {
  // Algoritmo de Computus para calcular la fecha de Semana Santa
  const a = anio % 19;
  const b = Math.floor(anio / 100);
  const c = anio % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(anio, mes - 1, dia);
}

//Fecha de inicio de semana santa
function calcularFechaSemanaSanta(anio) {
  const fechaPascua = calcularFechaPascua(anio);
  const semanaAntes = new Date(fechaPascua);
  semanaAntes.setDate(fechaPascua.getDate() - 7); // resta una semana
  return semanaAntes;
}


//Feria de Sevilla (dos semanas después del Domingo de Resurrección):
 
function calcularFechaFeriaSevilla(anio) {
  const fechaPascua = calcularFechaPascua(anio);
  const dosSemanasDespues = new Date(fechaPascua);
  dosSemanasDespues.setDate(fechaPascua.getDate() + 14); // Sumamos 14 días (dos semanas)
  return dosSemanasDespues;
}
//Final del Carnaval de Cádiz (viernes anterior al Miércoles de Ceniza):
 
function calcularFechaFinalCarnavalCadiz(anio) {
  const fechaPascua = calcularFechaPascua(anio);
  const miercolesDeCeniza = new Date(fechaPascua);
  miercolesDeCeniza.setDate(fechaPascua.getDate() - 46); // Restamos 46 días para llegar al Miércoles de Ceniza
  const viernesAnterior = new Date(miercolesDeCeniza);
  viernesAnterior.setDate(miercolesDeCeniza.getDate() -5); // Restamos 5 días para llegar al viernes anterior
  return viernesAnterior;
}
//El Rocío (50 días después de la Pascua, en Pentecostés):
 
function calcularFechaElRocio(anio) {
  const fechaPascua = calcularFechaPascua(anio);
  const cincuentaDiasDespues = new Date(fechaPascua);
  cincuentaDiasDespues.setDate(fechaPascua.getDate() + 50); // Sumamos 50 días
  return cincuentaDiasDespues;
}


document.write('<table><tr><td>año</td><td>Final COAC</td><td>Semana Santa</td><td>Feria Sevilla</td><td>El Rocio</td></tr>')

for(i=2023;i<2099;i++)
{
anio=i;

  let fechaSemanaSanta = calcularFechaSemanaSanta(anio);
  fechaSemanaSanta=fechaSemanaSanta.getDate()+'/'+ (+fechaSemanaSanta.getMonth()+1);

  let fechaFeriaSevilla = calcularFechaFeriaSevilla(anio);
  fechaFeriaSevilla=fechaFeriaSevilla.getDate()+'/'+ (+fechaFeriaSevilla.getMonth()+1);

  let fechaFinalCarnavalCadiz = calcularFechaFinalCarnavalCadiz(anio);
  fechaFinalCarnavalCadiz = fechaFinalCarnavalCadiz.getDate()+'/'+ (+fechaFinalCarnavalCadiz.getMonth()+1);

  let fechaElRocio = calcularFechaElRocio(anio);
  fechaElRocio = fechaElRocio.getDate()+'/'+ (+fechaElRocio.getMonth()+1);
  
  document.write(` <tr><th>${i}</th><td>${fechaFinalCarnavalCadiz}</td><td>${fechaSemanaSanta}</td><td>${fechaFeriaSevilla}</td><td>${fechaElRocio}</td></tr>`);
  
}
document.write('</table>')
</script>
<style>
td{ text-align:center}
th {background: yellow; font-weight:bold;}
</style>
