import { Image } from "./Classes/Image.js";
import { Square } from "./Classes/Square.js";
import { AxisByKey } from "./constants/keys.js";
import {
  ColorsEnum,
  dibujarTablero,
  NUMBER_BY_COLOR,
} from "./Tablero/index.js";

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

function drawCanvas({ width = 800, height = 400, strokeColor = "black" }) {
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = strokeColor;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
drawCanvas({});
// const image1 = new Image({ctx, canvasWidth: canvas.width, canvasHeight: canvas.height, startPointX: 10, startPointY: 5, drawCanvas})

// image1.drawImg()

// document.addEventListener("keydown", (event) => {
//   let key = event.key
//   image1.objMovement(event, 10, AxisByKey[key])
//   image1.drawImg()
// })
//x, y

const INITIAL_POSITION = [0, 0];
let nextAvatarPosition = [0, 0];
let previousAvatarPosition = [0, 0];
let tablero = [];
const iniciar = () => {
  tablero = dibujarTablero();
};

const verifyDestination = () => {
  let nextSquareColor =
    tablero[nextAvatarPosition[0]][nextAvatarPosition[1]].color;

  let destinationMovement = NUMBER_BY_COLOR[nextSquareColor];
  return destinationMovement;
};

const movementInsideTable = () => {
  let destination = verifyDestination();
  console.log({ avatarPosition: nextAvatarPosition });
  if (destination === 0 || destination === 2) {
    if (destination === 2) {
      tablero[previousAvatarPosition[0]][previousAvatarPosition[1]].setColor(
        ColorsEnum.TIERRA
      );

      tablero[previousAvatarPosition[0]][previousAvatarPosition[1]].drawSquare();
      
      nextAvatarPosition = INITIAL_POSITION;
      previousAvatarPosition = INITIAL_POSITION;

      // Color para avatar en posicion inicial
      tablero[INITIAL_POSITION[0]][INITIAL_POSITION[1]].setColor(
        ColorsEnum.AVATAR
      );
      // Dibujar avatar en posicion inicial
      tablero[INITIAL_POSITION[0]][INITIAL_POSITION[1]].drawSquare();
    } else {
      nextAvatarPosition[0] = previousAvatarPosition[0];
      nextAvatarPosition[1] = previousAvatarPosition[1];
    }
  } else {
    tablero[nextAvatarPosition[0]][nextAvatarPosition[1]].setColor(
      ColorsEnum.AVATAR
    );

    tablero[nextAvatarPosition[0]][nextAvatarPosition[1]].drawSquare();

    tablero[previousAvatarPosition[0]][previousAvatarPosition[1]].setColor(
      ColorsEnum.TIERRA
    );

    tablero[previousAvatarPosition[0]][previousAvatarPosition[1]].drawSquare();

    previousAvatarPosition[0] = nextAvatarPosition[0];
    previousAvatarPosition[1] = nextAvatarPosition[1];
  }
};

const movement = (e) => {
  let tecla = e.keyCode;
  if (tecla === 37) {
    //Izquierda
    if (nextAvatarPosition[1] - 1 >= 0) {
      //Si está dentro del tablero
      //Actualizo la posición del avatar
      nextAvatarPosition[1] -= 1;
      movementInsideTable();
    }
  } else if (tecla === 39) {
    //Derecha
    if (nextAvatarPosition[1] + 1 <= 20) {
      //Si está dentro del tablero
      //Actualizo la posición del avatar
      nextAvatarPosition[1] += 1;
      //Realizo el movimiento
      movementInsideTable();
    }
  } else if (tecla === 38) {
    //Arriba
    if (nextAvatarPosition[0] - 1 >= 0) {
      //Si está dentro del tablero
      //Actualizo la posición del avatar
      nextAvatarPosition[0] -= 1;
      //Realizo el movimiento
      movementInsideTable();
    }
  } else if (tecla === 40) {
    //Abajo
    if (nextAvatarPosition[0] + 1 <= 10) {
      //Si está dentro del tablero
      //Actualizo la posición del avatar
      nextAvatarPosition[0] += 1;
      //Realizo el movimiento
      movementInsideTable();
    }
  }
};

document.addEventListener("keydown", movement);
document.addEventListener("DOMContentLoaded", iniciar);
