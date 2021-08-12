const start = document.getElementById("start");
const itsTurn = document.getElementById("turn");
const wonScore = document.getElementById("wonScore");
const lostScore = document.getElementById("lostScore");
const tiedScore = document.getElementById("tiedScore");
const slot = document.querySelectorAll(".slot");

const tableroBase = [
  [1, "empty"],
  [2, "empty"],
  [3, "empty"],
  [4, "empty"],
  [5, "empty"],
  [6, "empty"],
  [7, "empty"],
  [8, "empty"],
  [9, "empty"],
];
let tableroInicial = [];
let wonCounter = 0;
let lostCounter = 0;
let tiedCounter = 0;

let turn = Math.round(Math.random());

//Boton start
//Al hacer click, el tablero iniciara como el tablero base, se sacará un número al azar y se imprimirá el turno en el H2
start.addEventListener("click", () => {
  tableroInicial = [...tableroBase];
  //Primer turno
  if (turn === 0) {
    itsTurn.innerHTML = "It's Your turn";
  } else {
    pcMove(tableroInicial);
    /* itsTurn.innerHTML = "Pc's"; */
  }
  //desaparecerá el boton Let's start y aparecerá el boton Play again
  start.style = "display:none";
  again.style = "display:block";
  //Se creará un listener por cada casilla
  for (let i = 0; i < slot.length; i++) {
    slot[i].addEventListener(
      "click",
      function hola() {
        if (!gameOver(tableroInicial)) {
          if (tableroInicial[i][1] == "empty") {
            if (turn === 0) {
              slot[i].children[0].style = "display:inline";
              tableroInicial[i][1] = "Player1";
              /* itsTurn.innerHTML = "Pc's"; */
              gameOver1(tableroInicial);
              pcMove(tableroInicial);
            }
          } else {
            console.log("Casilla ocupada");
          }
          console.table(tableroInicial);
        }
      },
      { once: true }
    );
  }
});

// Boton Play again
again.addEventListener("click", () => {
  tableroInicial = [...tableroBase];
  //Limpia las X y O
  for (let i = 0; i < slot.length; i++) {
    slot[i].children[0].style = "display:none";
    slot[i].children[1].style = "display:none";
    tableroInicial[i][1] = "empty";
  }
  // Primer turno
  console.table(tableroInicial);
  if (turn === 0) {
    itsTurn.innerHTML = "It's Your turn";
  } else {
    pcMove(tableroInicial);
    /* itsTurn.innerHTML = "Pc's"; */
  }
  //Se creará un listener por cada casilla
  for (let i = 0; i < slot.length; i++) {
    slot[i].addEventListener(
      "click",
      function hola() {
        if (!gameOver(tableroInicial)) {
          if (tableroInicial[i][1] == "empty") {
            if (turn === 0) {
              slot[i].children[0].style = "display:inline";
              tableroInicial[i][1] = "Player1";
              /* itsTurn.innerHTML = "Pc's"; */
              gameOver1(tableroInicial);
              pcMove(tableroInicial);
            }
          } else {
            console.log("Casilla ocupada");
          }
          console.table(tableroInicial);
        }
      },
      { once: true }
    );
  }
});
//

//REGLAS:
//Termina el juego
function gameOver1(arreglo) {
  switch (true) {
    case player1Win(arreglo):
      alert("¡Ganaste!");
      wonScore.innerHTML = wonCounter;
      wonCounter = wonCounter + 1;
      return true;

      break;

    case player2Win(arreglo):
      alert("Perdiste :(");
      lostScore.innerHTML = lostCounter;
      lostCounter = lostCounter + 1;
      return true;
      break;

    case draw(arreglo):
      alert("¡Empate!");
      tiedScore.innerHTML = tiedCounter;
      tiedCounter = tiedCounter + 1;
      return true;
      break;

    default:
      break;
  }
}

//Se termina el juego cuando :
function gameOver(arreglo) {
  if (player1Win(arreglo) || player2Win(arreglo) || draw(arreglo)) {
    return true;
  } else {
    console.log("El juego sigue!");
  }
}

function player1Win(arreglo) {
  let player1Moves = arreglo.filter((e) => e[1] === "Player1").map((u) => u[0]);

  if (
    (player1Moves.includes(1) &&
      player1Moves.includes(2) &&
      player1Moves.includes(3)) ||
    (player1Moves.includes(4) &&
      player1Moves.includes(5) &&
      player1Moves.includes(6)) ||
    (player1Moves.includes(7) &&
      player1Moves.includes(8) &&
      player1Moves.includes(9)) ||
    (player1Moves.includes(1) &&
      player1Moves.includes(4) &&
      player1Moves.includes(7)) ||
    (player1Moves.includes(2) &&
      player1Moves.includes(5) &&
      player1Moves.includes(8)) ||
    (player1Moves.includes(3) &&
      player1Moves.includes(6) &&
      player1Moves.includes(9)) ||
    (player1Moves.includes(1) &&
      player1Moves.includes(5) &&
      player1Moves.includes(8)) ||
    (player1Moves.includes(3) &&
      player1Moves.includes(5) &&
      player1Moves.includes(7))
  ) {
    console.log("Ganó el player 1");
    return true;
  }
}
function player2Win(arreglo) {
  let player2Moves = arreglo
    .filter((e) => e[1] === "Player2")
    .map((u) => u[0])
    .sort(function (a, b) {
      return a - b;
    });

  if (
    (player2Moves.includes(1) &&
      player2Moves.includes(2) &&
      player2Moves.includes(3)) ||
    (player2Moves.includes(4) &&
      player2Moves.includes(5) &&
      player2Moves.includes(6)) ||
    (player2Moves.includes(7) &&
      player2Moves.includes(8) &&
      player2Moves.includes(9)) ||
    (player2Moves.includes(1) &&
      player2Moves.includes(4) &&
      player2Moves.includes(7)) ||
    (player2Moves.includes(2) &&
      player2Moves.includes(5) &&
      player2Moves.includes(8)) ||
    (player2Moves.includes(3) &&
      player2Moves.includes(6) &&
      player2Moves.includes(9)) ||
    (player2Moves.includes(1) &&
      player2Moves.includes(5) &&
      player2Moves.includes(9)) ||
    (player2Moves.includes(3) &&
      player2Moves.includes(5) &&
      player2Moves.includes(7))
  ) {
    console.log("Ganó el player 2");
    return true;
  }
}

function draw(arreglo) {
  if (
    arreglo.filter((e) => e[1] == "Player1").length +
      arreglo.filter((e) => e[1] == "Player2").length ==
    9
  ) {
    console.log("Empate");
    return true;
  }
}

//PC moves

function pcMove(tablero) {
  let player1Moves = tablero
    .filter((e) => e[1] === "Player1")
    .map((u) => u[0])
    .sort(function (a, b) {
      return a - b;
    });
  let pcMoves = tablero
    .filter((e) => e[1] === "Player2")
    .map((u) => u[0])
    .sort(function (a, b) {
      return a - b;
    });
  const movimientoPC = (casilla) => {
    setTimeout(() => {
      slot[casilla - 1].children[1].style = "display:inline";
    tablero[casilla - 1][1] = "Player2";
    itsTurn.innerHTML = "It's Your turn";
    turn = 0;
    gameOver1(tablero);
    }, 500);
    
  };
  if (tablero.filter((e) => e[1] == "empty").length == 9) {
    movimientoPC(9);
  } else {
    switch (true) {
      case tablero.filter((e) => e[1] == "Player1").length +
        tablero.filter((e) => e[1] == "Player2").length ==
        1:
        if (tablero[4][1] == "empty") {
            movimientoPC(5);
        }
        else if (player1Moves.includes(1) || player1Moves.includes(3)) {
          movimientoPC(2);
        } else {
          movimientoPC(8);
        }
        break;
      case tablero.filter((e) => e[1] == "Player1").length +
        tablero.filter((e) => e[1] == "Player2").length ==
        2:
        if (player1Moves.includes(1)) {
          movimientoPC(7);
        } else {
          movimientoPC(1);
        }
        break;
      case tablero.filter((e) => e[1] == "Player1").length +
        tablero.filter((e) => e[1] == "Player2").length >=
        3:
        console.log(pcMoves);
        switch (true) {
          case pcMoves.includes(1) &&
            pcMoves.includes(2) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;
          case pcMoves.includes(1) &&
            pcMoves.includes(3) &&
            tablero[1][1] == "empty":
            movimientoPC(2);
            break;
          case pcMoves.includes(2) &&
            pcMoves.includes(3) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case pcMoves.includes(4) &&
            pcMoves.includes(5) &&
            tablero[5][1] == "empty":
            movimientoPC(6);
            break;
          case pcMoves.includes(4) &&
            pcMoves.includes(6) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case pcMoves.includes(5) &&
            pcMoves.includes(6) &&
            tablero[3][1] == "empty":
            movimientoPC(4);
            break;
          case pcMoves.includes(7) &&
            pcMoves.includes(8) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case pcMoves.includes(7) &&
            pcMoves.includes(9) &&
            tablero[7][1] == "empty":
            movimientoPC(8);
            break;
          case pcMoves.includes(8) &&
            pcMoves.includes(9) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case pcMoves.includes(1) &&
            pcMoves.includes(4) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case pcMoves.includes(1) &&
            pcMoves.includes(7) &&
            tablero[3][1] == "empty":
            movimientoPC(4);
            break;
          case pcMoves.includes(4) &&
            pcMoves.includes(7) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case pcMoves.includes(2) &&
            pcMoves.includes(5) &&
            tablero[7][1] == "empty":
            movimientoPC(8);
            break;
          case pcMoves.includes(2) &&
            pcMoves.includes(8) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case pcMoves.includes(5) &&
            pcMoves.includes(8) &&
            tablero[1][1] == "empty":
            movimientoPC(2);
            break;
          case pcMoves.includes(3) &&
            pcMoves.includes(6) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case pcMoves.includes(3) &&
            pcMoves.includes(6) &&
            tablero[5][1] == "empty":
            movimientoPC(6);
            break;
          case pcMoves.includes(6) &&
            pcMoves.includes(9) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;
          case pcMoves.includes(1) &&
            pcMoves.includes(5) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case pcMoves.includes(1) &&
            pcMoves.includes(9) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case pcMoves.includes(5) &&
            pcMoves.includes(9) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case pcMoves.includes(3) &&
            pcMoves.includes(5) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case pcMoves.includes(3) &&
            pcMoves.includes(7) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case pcMoves.includes(5) &&
            pcMoves.includes(7) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;

          case player1Moves.includes(1) &&
            player1Moves.includes(2) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;
          case player1Moves.includes(1) &&
            player1Moves.includes(3) &&
            tablero[1][1] == "empty":
            movimientoPC(2);
            break;
          case player1Moves.includes(2) &&
            player1Moves.includes(3) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case player1Moves.includes(4) &&
            player1Moves.includes(5) &&
            tablero[5][1] == "empty":
            movimientoPC(6);
            break;
          case player1Moves.includes(4) &&
            player1Moves.includes(6) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case player1Moves.includes(5) &&
            player1Moves.includes(6) &&
            tablero[3][1] == "empty":
            movimientoPC(4);
            break;
          case player1Moves.includes(7) &&
            player1Moves.includes(8) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case player1Moves.includes(7) &&
            player1Moves.includes(9) &&
            tablero[7][1] == "empty":
            movimientoPC(8);
            break;
          case player1Moves.includes(8) &&
            player1Moves.includes(9) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case player1Moves.includes(1) &&
            player1Moves.includes(4) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case player1Moves.includes(1) &&
            player1Moves.includes(7) &&
            tablero[3][1] == "empty":
            movimientoPC(4);
            break;
          case player1Moves.includes(4) &&
            player1Moves.includes(7) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case player1Moves.includes(2) &&
            player1Moves.includes(5) &&
            tablero[7][1] == "empty":
            movimientoPC(8);
            break;
          case player1Moves.includes(2) &&
            player1Moves.includes(8) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case player1Moves.includes(5) &&
            player1Moves.includes(8) &&
            tablero[1][1] == "empty":
            movimientoPC(2);
            break;
          case player1Moves.includes(3) &&
            player1Moves.includes(6) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case player1Moves.includes(3) &&
            player1Moves.includes(6) &&
            tablero[5][1] == "empty":
            movimientoPC(6);
            break;
          case player1Moves.includes(6) &&
            player1Moves.includes(9) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;
          case player1Moves.includes(1) &&
            player1Moves.includes(5) &&
            tablero[8][1] == "empty":
            movimientoPC(9);
            break;
          case player1Moves.includes(1) &&
            player1Moves.includes(9) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case player1Moves.includes(5) &&
            player1Moves.includes(9) &&
            tablero[0][1] == "empty":
            movimientoPC(1);
            break;
          case player1Moves.includes(3) &&
            player1Moves.includes(5) &&
            tablero[6][1] == "empty":
            movimientoPC(7);
            break;
          case player1Moves.includes(3) &&
            player1Moves.includes(7) &&
            tablero[4][1] == "empty":
            movimientoPC(5);
            break;
          case player1Moves.includes(5) &&
            player1Moves.includes(7) &&
            tablero[2][1] == "empty":
            movimientoPC(3);
            break;
          case tablero[1][1] == "empty":
            movimientoPC(2);
            break;
          case tablero[7][1] == "empty":
            movimientoPC(8);
            break;

          default:
            movimientoPC(tablero.find((e) => e[1] == "empty")[0]);
            console.log("no sabía qué hacer");
            break;
        }
        break;

      default:
        break;
    }
  }
}
