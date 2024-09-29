// Variables globales
let palabras = [
    "hola", "mundo", "programacion", "javascript", "html", "css", "juego", "diversion",
    "amigo", "familia", "amor", "feliz", "triste", "alegre", "enojado", "sorpresa",
    "computadora", "telefono", "tablet", "television", "radio", "musica", "pelicula",
    "libro", "escuela", "profesor", "estudiante", "clase", "examen", "nota",
    "deporte", "futbol", "baloncesto", "tenis", "natacion", "ciclismo", "correr",
    "comida", "pizza", "tacos", "sushi", "hamburguesa", "ensalada", "frutas",
    "verano", "invierno", "primavera", "otoño", "sol", "lluvia", "nieve",
    "viaje", "avion", "tren", "coche", "bicicleta", "camion", "barco",
    // Agrega más palabras aquí...
];
let palabraActual = "";
let puntuacion = 0;

// Función para generar una palabra al azar
function generarPalabra() {
    const indice = Math.floor(Math.random() * palabras.length);
    palabraActual = palabras[indice];
    document.getElementById("palabra-actual").textContent = palabraActual;
}

// Función para verificar la respuesta del jugador
function verificarRespuesta() {
    const entradaJugador = document.getElementById("entrada-jugador").value;
    if (entradaJugador === palabraActual) {
        puntuacion++;
        document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;
        document.getElementById("resultado").textContent = "¡Correcto!";
    } else {
        document.getElementById("resultado").textContent = `Lo siento, la respuesta correcta era ${palabraActual}`;
    }
    document.getElementById("entrada-jugador").value = "";
    generarPalabra();
}

// Event listeners
document.addEventListener("DOMContentLoaded", generarPalabra);
document.getElementById("boton-enviar").addEventListener("click", verificarRespuesta);
document.getElementById("entrada-jugador").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta();
    }
});