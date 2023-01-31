const ghostImg = document.getElementById("ghost")

export class Square {
  constructor(ctx, canvasWidth, canvasHeight, startPointX = 0, startPointY = 0, width = 50, height = 50, color = "red", image = ghostImg) {
    this.ctx = ctx
    this.startPointX = startPointX
    this.startPointY = startPointY
    this.width = width
    this.height = height
    this.color = color
    this.image = image
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
  }

  drawSquare() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.startPointX, this.startPointY, this.width, this.height)
  }
  drawImg(){
    this.ctx.drawImage(this.image, this.startPointX, this.startPointY, this.width, this.height)
  }
  moveRight(event, movement){
    let rightArrow = event.keyCode
    let move = movement
    console.log(movement, event.keyCode)
    if (rightArrow === 39) {
      if(this.startPointX < this.canvasWidth - move - this.width) {
        this.startPointX += move
        this.drawImg()
      } else {
        this.drawImg()
      }
    }
  }
}