import { Square } from "./Square.js"

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.strokeRect(0, 0, canvas.width, canvas.height)


const square1 = new Square(ctx, canvas.width, canvas.height, 10, 5)

square1.drawImg()

document.addEventListener("keydown", (event) => { 
  canvas.width = 500
  canvas.height = 500
  ctx.fillStyle = "black"
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  square1.moveRight(event, 10) 
})