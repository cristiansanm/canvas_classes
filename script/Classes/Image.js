import { BasisClass } from "./BasisClass.js";

const ghostImg = document.getElementById("ghost");
export class Image extends BasisClass {
  constructor({
    ctx,
    canvasWidth,
    canvasHeight,
    startPointX = 0,
    startPointY = 0,
    width = 50,
    height = 50,
    drawCanvas = function () {},
    image = ghostImg,
  }) {
    super({
      ctx,
      canvasWidth,
      canvasHeight,
      startPointX,
      startPointY,
      width,
      height,
      drawCanvas,
    });
    this.image = image;
  }
  drawImg() {
    this.ctx.drawImage(
      this.image,
      this.startPointX,
      this.startPointY,
      this.width,
      this.height
    );
  }
}
