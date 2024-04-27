import { Hero } from "./game.js";
import { draw } from "./game.js";

// движение

let heroes = [
    {xi: 42, yi: 600-10, color: "red"},
    {xi: 100, yi: 85, color: "blue"}
]

let play = true

function playBoolen(){
    setTimeout(()=>{
        play=true
        console.log(play, "16");
    }, 3000)

}

document.addEventListener("keydown", (event)=>{
    let hopTime = 0
    if (event.key==="w" && play){   //прыжок красного
        let hop = setInterval(()=>{
            console.log(play, "25");
            play = false
            console.log(play, "27");
            hopTime++
            heroes[0].yi-=3
            if(hopTime===40){
                clearInterval(hop)
                hopTime=0
            }
            if(heroes[0].yi<5){
                heroes[0].yi=5
            }
        },15)
        playBoolen()
        console.log(play, "39");
        

    }
    if (event.key==="d"){
        heroes[0].xi+=3
        if(heroes[0].xi>=793){heroes[0].xi=793}
    }
    if (event.key==="a"){
        heroes[0].xi-=3
        if(heroes[0].xi<=7){heroes[0].xi=7}
    }
    rendering()
})
document.addEventListener("keydown", (event)=>{
    let hopTime = 0
    if (event.key==="ArrowUp"){
        let hop = setInterval(()=>{
            hopTime++
            heroes[1].yi-=3
            if(hopTime===40){
                clearInterval(hop)
                hopTime=0
            }
            if(heroes[1].yi<5){
                heroes[1].yi=5
            }
        },15)
    }
    if (event.key==="ArrowRight"){
        heroes[1].xi+=3
        if(heroes[1].xi>=793){heroes[1].xi=793}
    }
    if (event.key==="ArrowLeft"){
        heroes[1].xi-=3
        if(heroes[1].xi<=7){heroes[1].xi=7}
    }
    rendering()
})


//реакция опоры








//гравитация
const gravitation = setInterval(()=>{
    heroes[0].yi+=3
    heroes[1].yi+=3
    if(heroes[0].yi>=575){
        heroes[0].yi=575
    }
    if(heroes[1].yi>=575){
        heroes[1].yi=575
    }
    rendering()
},30)


// clearInterval(gravitation)


function rendering(){
    svg.innerHTML = "" 
    draw() 
    //герои
    Hero(heroes[0].xi, heroes[0].yi, heroes[0].color)
    Hero(heroes[1].xi, heroes[1].yi, heroes[1].color)
}

rendering()