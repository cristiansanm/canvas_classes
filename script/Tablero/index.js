import { Square } from "../Classes/Square.js";

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const tileMap = document.getElementById("tilemap");

let x = 0;
let y = 0;

let PROP_WIDTH = 32;
let PROP_HEIGHT = 32;

export const ColorsEnum = {
  AVATAR: "orange",
  TIERRA: "gray",
  PELIGRO: "red",
  AGUA: "blue",
  LLAVE: "green",
  PUERTA: "brown",
};

const COLOR_BY_NUMBER = {
  0: ColorsEnum.AGUA,
  1: ColorsEnum.TIERRA,
  2: ColorsEnum.PELIGRO,
  3: ColorsEnum.PUERTA,
  5: ColorsEnum.LLAVE,
};

export const NUMBER_BY_COLOR = {
  [ColorsEnum.AGUA]: 0,
  [ColorsEnum.TIERRA]: 1,
  [ColorsEnum.PELIGRO]: 2,
  [ColorsEnum.PUERTA]: 3,
  [ColorsEnum.LLAVE]: 5,
};
export const PropsType = {
  AGUA: "agua",
  TIERRA: "tierra",
  LLAVE: "llave",
  PELIGRO: "peligro",
  PUERTA: "puerta",
  AVATAR: "avatar",
};

// export const NUMBER_BY_PROPS = {
//   [PropsType.AGUA]: 0,
//   [PropsType.TIERRA]: 1,
//   [PropsType.PELIGRO]: 2,
//   [PropsType.PUERTA]: 3,
//   [PropsType.LLAVE]: 5
// }

// const drawImageFunc = ({ row, column, sourceImgStartX, sourceImgStartY, sourceImgWidth = 32, sourceImgHeight = 32}) => {
//   ctx.drawImage(tileMap, sourceImgStartX, sourceImgStartY, sourceImgWidth, sourceImgHeight, row*sourceImgWidth, column*sourceImgHeight, PROP_WIDTH, PROP_HEIGHT)
// }
const PROPS_BY_NUMBER = {
  0: (row, column) => {
    return ctx.drawImage(
      tileMap,
      0,
      0,
      PROP_WIDTH,
      PROP_HEIGHT,
      row * PROP_WIDTH,
      column * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  },
  1: (row, column) => {
    console.log("in 1");
    return ctx.drawImage(
      tileMap,
      64,
      0,
      PROP_WIDTH,
      PROP_HEIGHT,
      row * PROP_WIDTH,
      column * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  },
  2: (row, column) => {
    return ctx.drawImage(
      tileMap,
      64,
      32,
      PROP_WIDTH,
      PROP_HEIGHT,
      row * PROP_WIDTH,
      column * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  },
  3: (row, column) => {
    return ctx.drawImage(
      tileMap,
      32,
      0,
      PROP_WIDTH,
      PROP_HEIGHT,
      row * PROP_WIDTH,
      column * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  },
  5: (row, column) => {
    return ctx.drawImage(
      tileMap,
      96,
      0,
      PROP_WIDTH,
      PROP_HEIGHT,
      row * PROP_WIDTH,
      column * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  },
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

const drawPlayer = (j, i) => {
  if (j === 0 && i === 0) {
    ctx.drawImage(
      tileMap,
      32,
      32,
      PROP_WIDTH,
      PROP_HEIGHT,
      j * PROP_WIDTH,
      i * PROP_HEIGHT,
      PROP_WIDTH,
      PROP_HEIGHT
    );
  }
};

export const dibujarTablero = () => {
  for (let i = 0; i < matrizTablero.length; i++) {
    for (let j = 0; j < matrizTablero[i].length; j++) {
      if (matrizTablero[i][j] === 0) {
        ctx.drawImage(
          tileMap,
          0,
          0,
          PROP_WIDTH,
          PROP_HEIGHT,
          j * PROP_WIDTH,
          i * PROP_HEIGHT,
          PROP_WIDTH,
          PROP_HEIGHT
        );
      }
      if (matrizTablero[i][j] === 1) {
        ctx.drawImage(
          tileMap,
          64,
          0,
          PROP_WIDTH,
          PROP_HEIGHT,
          j * PROP_WIDTH,
          i * PROP_HEIGHT,
          PROP_WIDTH,
          PROP_HEIGHT
        );
      }
      if (matrizTablero[i][j] === 2) {
        ctx.drawImage(
          tileMap,
          64,
          32,
          PROP_WIDTH,
          PROP_HEIGHT,
          j * PROP_WIDTH,
          i * PROP_HEIGHT,
          PROP_WIDTH,
          PROP_HEIGHT
        );
      }
      if (matrizTablero[i][j] === 3) {
        ctx.drawImage(
          tileMap,
          32,
          0,
          PROP_WIDTH,
          PROP_HEIGHT,
          j * PROP_WIDTH,
          i * PROP_HEIGHT,
          PROP_WIDTH,
          PROP_HEIGHT
        );
      }
      if (matrizTablero[i][j] === 5) {
        ctx.drawImage(
          tileMap,
          96,
          0,
          PROP_WIDTH,
          PROP_HEIGHT,
          j * PROP_WIDTH,
          i * PROP_HEIGHT,
          PROP_WIDTH,
          PROP_HEIGHT
        );
      }
      drawPlayer(j, i)
      ctx.strokSytle = "black";
      ctx.strokeRect(j * PROP_HEIGHT, i * PROP_WIDTH, PROP_WIDTH, PROP_HEIGHT);
    }
  }
};

/*
  ctx.drawImage(tileMap,
      32,
      32,
      PROP_WIDTH,
      PROP_HEIGHT,
      nextPosition)
*/