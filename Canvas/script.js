const canvas = document.querySelector(#paintCanvas);
const ctx =canvas.getContext('2D')
const clearbtn = document.querySelector(#clearBtn)


let isDrawing = false
let brushColour = "#424242;"
let brushWidth = 5


//---------------mousedown & mouseup

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    ctx.beginPath()
    ctx.moveTo(e.offsetX,e.offsetY)
    
})