//JavaScript (juego.js)

let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];

function dibujarTablero() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`c${i}`).innerHTML = tablero[i];
  }
}

function hacerMovimiento(casilla) {
  if (tablero[casilla] === "") {
    tablero[casilla] = turno;
    turno = (turno === "X") ? "O" : "X";
    dibujarTablero();
    verificarGanador();
  }
}

function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
      alert(`Ganó ${tablero[a]}!`);
      reiniciarJuego();
      return;
    }
  }
}

function reiniciarJuego() {
  turno = "X";
  tablero = ["", "", "", "", "", "", "", "", ""];
  dibujarTablero();
}

document.addEventListener("DOMContentLoaded", () => {
  const casillas = document.querySelectorAll(".casilla");
  casillas.forEach((casilla, index) => {
    casilla.addEventListener("click", () => hacerMovimiento(index));
  });

  document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);
});
