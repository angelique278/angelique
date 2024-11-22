"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//JavaScript (juego.js)
var turno = "X";
var tablero = ["", "", "", "", "", "", "", "", ""];

function dibujarTablero() {
  for (var i = 0; i < 9; i++) {
    document.getElementById("c".concat(i)).innerHTML = tablero[i];
  }
}

function hacerMovimiento(casilla) {
  if (tablero[casilla] === "") {
    tablero[casilla] = turno;
    turno = turno === "X" ? "O" : "X";
    dibujarTablero();
    verificarGanador();
  }
}

function verificarGanador() {
  var combinacionesGanadoras = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < combinacionesGanadoras.length; i++) {
    var _combinacionesGanador = _slicedToArray(combinacionesGanadoras[i], 3),
        a = _combinacionesGanador[0],
        b = _combinacionesGanador[1],
        c = _combinacionesGanador[2];

    if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
      alert("Gan\xF3 ".concat(tablero[a], "!"));
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

document.addEventListener("DOMContentLoaded", function () {
  var casillas = document.querySelectorAll(".casilla");
  casillas.forEach(function (casilla, index) {
    casilla.addEventListener("click", function () {
      return hacerMovimiento(index);
    });
  });
  document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);
});
//# sourceMappingURL=juego.dev.js.map
