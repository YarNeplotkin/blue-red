import { Hero } from "./game.js";
import { draw } from "./game.js";
import { strengthOfReaction } from "./react.js";


// движение

let heroes = [
    {xi: 42, yi: 85, color: "red"},
    {xi: 100, yi: 85, color: "blue"}
]

export{heroes}



//гравитация
const gravitation = setInterval(()=>{
    heroes[0].yi+=2
    heroes[1].yi+=2
    if(heroes[0].yi>=575){
        heroes[0].yi=575
    }
    if(heroes[1].yi>=575){
        heroes[1].yi=575
    }
    strengthOfReaction()
    rendering()
},20)


let playRed = true

document.addEventListener("keydown", (event)=>{
    
    function playBoolen(){
        setTimeout(()=>{
            playRed=true
        }, 600)        
    }
    
    let hopTime = 0

    if (event.key==="w" && playRed){   //прыжок красного
        let hop = setInterval(()=>{
            playRed = false
            hopTime++
            heroes[0].yi-=4
            if(hopTime===30){
                clearInterval(hop)
                hopTime=0
            }
            if(heroes[0].yi<5){
                heroes[0].yi=5
            }
        },20)
        playBoolen()
    }
    
    if (event.key==="d"){
        heroes[0].xi+=1
        if(heroes[0].xi>=793){heroes[0].xi=793}
    }

    if (event.key==="a"){
        heroes[0].xi-=1
        if(heroes[0].xi<=7){heroes[0].xi=7}
    }

    strengthOfReaction()
    rendering()

})

let playBlue = true


document.addEventListener("keydown", (event)=>{
    
    function playBoolen(){
        setTimeout(()=>{
            playBlue=true
        }, 600)
    }

    

    let hopTime = 0

    if (event.key==="ArrowUp" && playBlue){   //прыжок синего
        let hop = setInterval(()=>{
            playBlue = false
            hopTime++
            heroes[1].yi-=4
            if(hopTime===30){
                clearInterval(hop)
                hopTime=0
            }
            if(heroes[1].yi<5){
                heroes[1].yi=5
            }
        },20)
        playBoolen()
    }

    if (event.key==="ArrowRight"){
        heroes[1].xi+=2
        if(heroes[1].xi>=793){heroes[1].xi=793}
    }

    if (event.key==="ArrowLeft"){
        heroes[1].xi-=2
        if(heroes[1].xi<=7){heroes[1].xi=7}
    }

    strengthOfReaction()
    rendering()

})


function rendering(){
    svg.innerHTML = "" 
    draw() 
    //герои
    Hero(heroes[0].xi, heroes[0].yi, heroes[0].color)
    Hero(heroes[1].xi, heroes[1].yi, heroes[1].color)
}

rendering()




