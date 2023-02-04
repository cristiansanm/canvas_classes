import { KeyEnum } from "../constants/keys.js";

/* A map of functions that are used to determine the position of the object. */
export const ConditionalByMovement = new Map([
  [
    KeyEnum.ARROW_LEFT,
    ({ movement, startPointX }) => {
      let position = startPointX;
      if (startPointX > movement) {
        position -= movement;
      }
      return position;
    },
  ],
  [
    KeyEnum.ARROW_RIGHT,
    ({ movement, startPointX, canvasWidth, width }) => {
      let position = startPointX;
      if (position < canvasWidth - movement - width) {
        position += movement;
      }
      return position;
    },
  ],
  [KeyEnum.ARROW_DOWN, ({ movement, startPointY, height, canvasHeight }) => {
    let position = startPointY;
    if (position < canvasHeight - movement - height) {
      position += movement;
    }
    return position;
  }],
  [KeyEnum.ARROW_UP, ({ movement, startPointY }) => {
    let position = startPointY
    if(position > movement ) {
      position -= movement;
    }
    return position;
  }]
]);

export class BasisClass {
  constructor({
    ctx,
    canvasWidth,
    canvasHeight,
    startPointX = 0,
    startPointY = 0,
    width = 50,
    height = 50,
    drawCanvas = function () {},
  }) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.startPointX = startPointX;
    this.startPointY = startPointY;
    this.width = width;
    this.height = height;
    this.drawCanvas = drawCanvas;
  }

  objMovement(event, movement, axis) {
    this.drawCanvas({});
    let key = event.key;
    if (axis === 'x') {
      this.startPointX = ConditionalByMovement.get(key)({ movement, startPointX: this.startPointX, width: this.width, canvasWidth: this.canvasWidth });
    } else if (axis === 'y') {
      this.startPointY = ConditionalByMovement.get(key)({ movement, startPointY: this.startPointY, height: this.height, canvasHeight: this.canvasHeight });
    }
  }
}
