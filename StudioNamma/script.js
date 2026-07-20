let card = document.querySelector(".cardfollower")
let hero = document.querySelector(".hero")

document.addEventListener("mousemove",(e)=>{
    card.style.top = e.clientY  + "px"
     card.style.left = e.clientX + "px"
    
    // card.style.transition = "linear 0.3s"
})



let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let flag = 0;

click.addEventListener("click",() =>{

    if (!flag){
        menudiv.style.top = "0%"
        menudiv.style.transition = "linear .8s"
        menudiv.style.rotate ="10deg"
        flag =1;

    }
    else{
        menudiv.style.top = "-100%"
        menudiv.style.transition = "linear .8s"
        menudiv.style.rotate ="0deg"
        flag =0;
    }
    

})