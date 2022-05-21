
const num = localStorage.getItem("contador");
const mostrar = document.getElementById("contador").innerHTML = num + " Equipos";
console.log(num);
mostrar;
console.log(localStorage.contador);
function contadorClicks(){
    // Si existe contador se incrementa y sino se inicializa
    if (localStorage.contador) {
        // Se convierte el contador a entero porque por defecto es una cadena
        localStorage.contador = parseInt(localStorage.contador) + 1;
        update = document.getElementById("contador").innerHTML = localStorage.contador + " Equipos";
    }
    else {
        localStorage.contador = 1;
    }
    console.log(localStorage.contador);
    console.log(localStorage);
}
function restaClicks(){
    if (localStorage.contador) {
        localStorage.contador = parseInt(localStorage.contador) - 1;
    }
    if(localStorage.contador < 0){
        localStorage.contador = 0;
    }
    document.getElementById("contador").innerHTML = localStorage.contador + " Equipos";
}
function resetearClicks(){
    localStorage.removeItem("contador");
    localStorage.contador = 0;
    document.getElementById("contador").innerHTML = localStorage.contador + " Equipos";
}