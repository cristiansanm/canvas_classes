import { Image } from "./Classes/Image.js"
import { Square } from "./Classes/Square.js"
import { AxisByKey } from "./constants/keys.js"

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

function drawCanvas({ width = 500, height = 500, strokeColor = "black"}) {
  canvas.width = width
  canvas.height = height
  ctx.fillStyle = strokeColor
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

drawCanvas({})
const image1 = new Image({ctx, canvasWidth: canvas.width, canvasHeight: canvas.height, startPointX: 10, startPointY: 5, drawCanvas})

image1.drawImg()

document.addEventListener("keydown", (event) => { 
  let key = event.key
  image1.objMovement(event, 10, AxisByKey[key]) 
  image1.drawImg()
})