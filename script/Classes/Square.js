import { BasisClass } from "./BasisClass.js";

export class Square extends BasisClass {
  constructor({
    ctx,
    canvasWidth,
    canvasHeight,
    startPointX = 0,
    startPointY = 0,
    width = 50,
    height = 50,
    drawCanvas = function () {},
    color = "red"
  }) {
    super(
      {ctx,
      canvasWidth,
      canvasHeight,
      startPointX,
      startPointY,
      width,
      height,
      drawCanvas
    });
    this.color = color;
  }

  drawSquare() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.startPointX,
      this.startPointY,
      this.width,
      this.height
    );
  }
}
