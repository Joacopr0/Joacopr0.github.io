function playGame(eleccionUsuario) {
    // Array que contiene las opciones posibles para el juego: piedra, papel y tijera.
    const opciones = ['piedra', 'papel', 'tijera'];

    // Selecciona aleatoriamente una opción para la computadora usando Math.random() y redondeando hacia abajo.
    // Multiplicamos por 3 porque hay tres opciones (índices 0, 1 y 2).
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    // Variable para almacenar el resultado del juego.
    let resultado = '';

    // Compara la elección del usuario con la elección de la computadora.
    if (eleccionUsuario === eleccionComputadora) {
        // Si ambas elecciones son iguales, es un empate.
        resultado = '¡Es un empate!';
    } else if (
        // Si el usuario elige "piedra" y la computadora "tijera", el usuario gana.
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        // Si el usuario elige "papel" y la computadora "piedra", el usuario gana.
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        // Si el usuario elige "tijera" y la computadora "papel", el usuario gana.
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        // Si ninguna de las condiciones anteriores se cumple, el usuario pierde.
        resultado = 'Perdiste...';
    }

    // Actualiza el contenido del elemento HTML con el id "resultado" para mostrar
    // las elecciones del usuario y de la computadora, y el resultado del juego.
    document.getElementById('resultado').textContent = `Tú elegiste: ${eleccionUsuario}. La computadora eligió: ${eleccionComputadora}. ${resultado}`;
}
