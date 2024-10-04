// ======================== Iniciar y Cerrar Sesion =========================

let iniciarSecion = document.getElementById("iniciar-sesion");

iniciarSecion.addEventListener("click", () => {
    iniciarSecion.innerText = "Cerrar Sesion";
})

// ======================== Ocultar Boton ==================================

document.getElementById("agregar-definicion").addEventListener("click", ocultarBoton);

function ocultarBoton(){
    document.getElementById("agregar-definicion").style.display = "none";
}

// ======================== Me Gusta-Gato ==================================

let btnLikeGato = document.querySelector('#me-gusta-gato');
let mostrarClickGato = document.querySelector('#ContadorLikeGato');
let contadorGato = 0;

function imprimirClickGato(){
    contadorGato++;
    mostrarClickGato.innerText = "+" + contadorGato;
    alert("Te Gusto Gato Atigrado :3")
}

btnLikeGato.addEventListener('click', imprimirClickGato);

// ======================== Me Gusta-Golden ================================

let btnLikeGolden = document.querySelector('#me-gusta-golden');
let mostrarClickGolden = document.querySelector('#ContadorLikeGolden');
let contadorGolden = 0;

function imprimirClickGolden(){
    contadorGolden++;
    mostrarClickGolden.innerText = "+" + contadorGolden;
    alert("Te Gusto Golden Retriever <3")
}

btnLikeGolden.addEventListener('click', imprimirClickGolden);