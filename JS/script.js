

document.getElementById('botonComprar1').onclick = function() {
    Preguntarhorario("ET")
}
let boton2 = document.getElementById('botonComprar2');
boton2.onclick = function() {
    Preguntarhorario("IndianaJones")
}
let boton3 = document.getElementById('botonComprar3');
boton3.onclick = function() {
    Preguntarhorario("VolveralFuturo")
}
let boton4 = document.getElementById('botonComprar4');
boton4.onclick = function() {
    Preguntarhorario("Tiburon")
}

function Preguntarhorario(peliculaelegida){
    $( "#diahorario" ).css( "display","block" );
    localStorage.setItem("Peliculaseleccinada", peliculaelegida);
}

let boton5 = document.getElementById('confirmarhorario');
boton5.onclick = function() {
    Preguntarentradas()
}

function Preguntarentradas(){
    $( "#CantidadEntradas" ).css( "display","block" );
    let inputdia = document.getElementById('dia');
    localStorage.setItem("dia", inputdia.value);
    let inputhorario = document.getElementById('horario');
    localStorage.setItem("horario", inputhorario.value);
}

let boton6 = document.getElementById('confirmarcantidad');
boton6.onclick = function() {
    MostrarTotal()
}

function MostrarTotal(){
    $( "#Total" ).css( "display","block" );
    let inputcantidad = document.getElementById('cantidaddeentradas');
    localStorage.setItem("cantidaddeentradas", inputcantidad.value);
    let PrecioFinal = inputcantidad.value * 500;
    let MensajeFinal = document.getElementById('MensajeFinal');
    MensajeFinal.innerHTML = "Reservaste "+localStorage.getItem("cantidaddeentradas")+" entradas para ver "+localStorage.getItem("Peliculaseleccinada")+" el día " +localStorage.getItem("dia")+" a las "+localStorage.getItem("horario")+". El total es de: $"+PrecioFinal+".";
}


















