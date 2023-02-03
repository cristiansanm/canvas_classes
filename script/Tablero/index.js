import { Square } from "../Classes/Square.js";

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

const ColorsEnum = {
  AVATAR: "orange",
  TIERRA: "gray",
  PELIGRO: "red",
  AGUA: "blue",
  LLAVE: "green",
  PUERTA: "white",
};
const COLOR_BY_NUMBER = {
  0: ColorsEnum.AGUA,
  1: ColorsEnum.TIERRA,
  2: ColorsEnum.PELIGRO,
  3: ColorsEnum.PUERTA,
  5: ColorsEnum.LLAVE
};


let matrizTablero = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 2, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 2, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 5, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3],
];

export const dibujarTablero = () => {
  let casillas = [];
  let color = ColorsEnum.AVATAR;
  matrizTablero.forEach((filas) => {
    let fila = []; //Reseteo las filas
    x = 0; //Reseteo las coordenadas x
    filas.forEach((casilla) => {
      //Condicional ternario para determinar el color de la casilla:
      color = x === 0 && y === 0 ? ColorsEnum.AVATAR : COLOR_BY_NUMBER[casilla];
      let newSquare = new Square({
        ctx,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height,
        startPointX: x,
        startPointY: y,
        width: 40,
        height: 40,
        color
      });
      newSquare.drawSquare();
      x += 40; //Voy sumando las cordenadas x
      //Añado la casilla al array de filas
      fila.push(newSquare);
    });
    y += 40; //Voy sumando las cordenadas y
    //Añado las filas al array de casillas
    casillas.push(fila);
  });
  return casillas;
};