const canvas = document.querySelector("#paintCanvas");
const ctx =canvas.getContext('2d')
const clearbtn = document.querySelector("#clearbtn")


let isDrawing = false
let brushColour = "#424242"
let brushWidth = 5


//------------------------------------>   mousedown & mouseup

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    ctx.beginPath()
    ctx.moveTo(e.offsetX,e.offsetY)
})



canvas.addEventListener("mouseup" ,()=>{
    isDrawing = false
    ctx.closePath()
})

//----------------------------------->   


canvas.addEventListener("mousemove", (e)=>{
    if(!isDrawing) return

    ctx.lineWidth = brushWidth 
    ctx.lineCap = 'round'
    ctx.strokeStyle = brushColour

    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
})

canvas.addEventListener('mouseleave',()=>{
    isDrawing = false 
})

canvas.addEventListener('moveenter',()=>{
    console.log("You Can Draw")
})

canvas.addEventListener('dblclick' , ()=>{
    const randomBg = `hsl(${Math.random()*360},70%,70%)`
    canvas.style.backgroundColor = randomBg
})

canvas.addEventListener("contextmenu" ,(e)=>{
    e.preventDefault()


const colors = ["red","blue","green","white","black","yellow"]
const randomColor = colors[Math.floor(Math.random()*colors.length)]
brushColour = randomColor
alert(`Brush colour changed to:${brushColour}`)
})

clearbtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
