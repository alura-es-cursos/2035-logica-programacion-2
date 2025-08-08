// Variables del juego
let numeroSecreto;
let intentos;
const maxIntentos = 3;
let juegoActivo = true;

// Elementos del DOM
const titulo = document.querySelector("h1");
const parrafo = document.querySelector(".texto__parrafo");
const input = document.querySelector(".container__input");
const btnIntentar = document.querySelector(".container__boton");
const btnNuevoJuego = document.querySelector("#reiniciar");

// Inicializar juego
iniciarJuego();

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    juegoActivo = true;
    titulo.textContent = "Adivina el número secreto (1-10)";
    parrafo.textContent = `Tienes ${maxIntentos} intentos.`;
    input.value = "";
    input.disabled = false;
    btnNuevoJuego.disabled = true;
    btnIntentar.disabled = false;
}

// Evento para botón "Intentar"
btnIntentar.addEventListener("click", () => {
    if (!juegoActivo) {
        parrafo.textContent = "Inicia un nuevo juego para seguir jugando.";
        return;
    }

    const numeroUsuario = Number(input.value);

    if (numeroUsuario < 1 || numeroUsuario > 10 || isNaN(numeroUsuario)) {
        parrafo.textContent = "Por favor, ingresa un número entre 1 y 10.";
        return;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        parrafo.textContent = `🎉 ¡Acertaste! El número era ${numeroSecreto}`;
        terminarJuego();
    } else if (intentos >= maxIntentos) {
        parrafo.textContent = `❌ Se acabaron los intentos. El número era ${numeroSecreto}`;
        terminarJuego();
    } else if (numeroUsuario < numeroSecreto) {
        parrafo.textContent = `El número secreto es mayor. Intentos restantes: ${maxIntentos - intentos}`;
    } else {
        parrafo.textContent = `El número secreto es menor. Intentos restantes: ${maxIntentos - intentos}`;
    }

    input.value = "";
});

// Evento para botón "Nuevo juego"
btnNuevoJuego.addEventListener("click", iniciarJuego);

// Terminar juego
function terminarJuego() {
    juegoActivo = false;
    input.disabled = true;
    btnIntentar.disabled = true;
    btnNuevoJuego.disabled = false;
}
