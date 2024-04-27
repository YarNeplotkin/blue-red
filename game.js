let svg = document.getElementById("svg") //достаю свг

svg.setAttribute("width", 800)
svg.setAttribute("height", 600) //задаю размер окна


//отрисовка двери с возможностью вызова по координате и смены цвета 
function door(X, Y, color){
    const border = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    border.setAttribute("x", X)
    border.setAttribute("y", Y)
    border.setAttribute("height", 50)
    border.setAttribute("width", 40)
    border.setAttribute("fill", "#e8c509")
    border.setAttribute("rx", "3")
    svg.appendChild(border)
    const desk = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    desk.setAttribute("x", X+8)
    desk.setAttribute("y", Y+8)
    desk.setAttribute("height", 34)
    desk.setAttribute("width", 24)
    desk.setAttribute("fill", "#333127")
    desk.setAttribute("stroke", color)
    desk.setAttribute("stroke-width", "5")
    svg.appendChild(desk) 
}

//отрисовка земли 
function earth(X, Y){  //поверхность
    const square3 = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    square3.setAttribute("x", X)
    square3.setAttribute("y", Y)
    square3.setAttribute("height", 4)
    square3.setAttribute("width", 40)
    square3.setAttribute("fill", "green")
    svg.appendChild(square3)
    const square2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    square2.setAttribute("x", X)
    square2.setAttribute("y", Y+4)
    square2.setAttribute("height", 3)
    square2.setAttribute("width", 40)
    square2.setAttribute("fill", "grey")
    svg.appendChild(square2)
    const square1 = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    square1.setAttribute("x", X)
    square1.setAttribute("y", Y+7)
    square1.setAttribute("height", 13)
    square1.setAttribute("width", 40)
    square1.setAttribute("fill", "brown")
    svg.appendChild(square1)
}
function ground(X, Y){  //земля
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", X)
    rect.setAttribute("y", Y)
    rect.setAttribute("height", 10)
    rect.setAttribute("width", 40)
    rect.setAttribute("fill", "brown")
    svg.appendChild(rect)
}
function slideleft(X,Y){  //наклонная плосткость
    const triangle = `
    <polygon fill="brown" points="${X} ${Y}, ${X+40} ${Y+20}, ${X} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}
function slideright(X,Y){
    const triangle = `
    <polygon fill="brown" points="${X} ${Y+20}, ${X+40} ${Y}, ${X+40} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}


//шип - spike
function spike(X,Y){
    const triangle = `
    <polygon fill="grey" stroke="black" stroke-width="1px" points="${X} ${Y+20}, ${X+10} ${Y+10}, ${X+20} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}


//платформа
function platform(X,Y,color){
    const line = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    line.setAttribute("x", X)
    line.setAttribute("y", Y)
    line.setAttribute("height", 3)
    line.setAttribute("width", 40)
    line.setAttribute("fill", color)
    line.setAttribute("stroke", "black")
    line.setAttribute("stroke-width", "1")
    line.setAttribute("rx", "1")
    svg.appendChild(line)
}

//лифт
function lift(X,Y,color){
    const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    rect1.setAttribute("x", X)
    rect1.setAttribute("y", Y)
    rect1.setAttribute("height", 10)
    rect1.setAttribute("width", 40)
    rect1.setAttribute("fill", "black")
    svg.appendChild(rect1) 
    const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    rect2.setAttribute("x", X+2)
    rect2.setAttribute("y", Y+2)
    rect2.setAttribute("height", 6)
    rect2.setAttribute("width", 36)
    rect2.setAttribute("fill", color)
    rect2.setAttribute("stroke", "#e8c509")
    rect2.setAttribute("stroke-width", "3")
    rect2.setAttribute("rx", "1")
    svg.appendChild(rect2) 
}


//жидкость: вода, огонь, кислота
function lakeleft(color,X,Y){
    const triangle = `
    <polygon fill="${color}" points="${X+3} ${Y+3}, ${X+40} ${Y+3}, ${X+40} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}
function lakeright(color,X,Y){
    const triangle = `
    <polygon fill="${color}" points="${X} ${Y+3}, ${X+40} ${Y+3}, ${X} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}
function lakerect(X,Y,color){
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    rect.setAttribute("x", X)
    rect.setAttribute("y", Y+3)
    rect.setAttribute("height", 17)
    rect.setAttribute("width", 40)
    rect.setAttribute("fill", color)
    svg.appendChild(rect)
}


//квест
function question(X,Y){
    const rect = `
    <rect " x="${X}" y="${Y}" 
    width="25" height="25"
    rx="3" fill="#e0bd92"/>
    </rect>
    `
    svg.insertAdjacentHTML("beforeend", rect)
}


//персонажи
function Hero(X,Y, color){
    let man = `
    <g id="g">
    <line x1="${X}" y1="${Y}" x2="${X}" y2="${Y+15}" stroke-width="4" stroke="${color}"/> 
    <line x1="${X}" y1="${Y}" x2="${X-5}" y2="${Y+13}" stroke-width="4" stroke="${color}"/> 
    <line x1="${X}" y1="${Y}" x2="${X+5}" y2="${Y+13}" stroke-width="4" stroke="${color}"/> 
    <line x1="${X}" y1="${Y+15}" x2="${X-5}" y2="${Y+25}" stroke-width="4" stroke="${color}"/> 
    <line x1="${X}" y1="${Y+15}" x2="${X+5}" y2="${Y+25}" stroke-width="4" stroke="${color}"/> 
    <circle cx="${X}" cy="${Y}" r="5" fill="${color}" /> 
    </g>
    `
    svg.insertAdjacentHTML("beforeend", man)
}

export{Hero}



//__________________________________________
//русуем

function draw(){
    //левые верхние двери
    door(20, 20, "red")
    door(80, 20, "blue")
    //доп слой верхнего этажа
    for (let i=0; i<760; i+=40){
        ground(i,130)
    }
    //верхний этаж
    for (let i=0; i<160; i+=40){
        earth(i,110)
    }
    lift(240,20,"gold")
    slideleft(160,110)
    lakeleft("blue",160,110)
    for (let i=200; i<320; i+=40){
        lakerect(i,110,"blue")
    }
    lakeright("blue", 320, 110)
    slideright(320,110)
    for (let i=360; i<520; i+=40){
        earth(i,110)
    }
    platform(440,107,"gold")
    for (let i=520; i<680; i+=20){
        spike(i,110)
    }
    earth(580,80)
    earth(680,110)
    slideleft(720,110)
    platform(800-120,107,"#b62ec8")
    lift(760,130,"#b62ec8")
    
    //доп слой предверхнего этажа
    for (let i=760; i>40; i-=40){
        ground(i,250)
    }
    for(let i=290; i<290+60; i+=10){
        ground(0,i)
    }
    for(let i=290+20; i<290+60; i+=10){
        ground(40,i)
    }
    for(let i=290+20+20; i<290+60; i+=10){
        ground(80,i)
    }
    //предверхний этаж
    for (let i=760; i>760-40*5; i-=40){
        earth(i,230)
    }
    for (let i=580; i>300; i-=20){
        spike(i,230)
    }
    platform(720,230-3,"#b62ec8")
    platform(640,230-3,"red")
    for (let i=760-12*40; i>760-40*17; i-=40){
        earth(i,230)
    }
    slideright(760-40*17,230)
    for (let i=520; i>280; i-=80){
        lift(i,145,"red")
    }
    for (let i=560; i>560-80*4; i-=80){
        lift(i,145,"blue")
    }
    platform(200,230-3,"blue")
    for(let i=0; i<160; i+=40){
        slideleft(i,270+i/2)
    }
    //следующий этаж подслой
    for(let i=0; i<160; i+=40){
        ground(i,350)
    }
    for(let i=0; i<160; i+=40){
        ground(i,360)
    }
    for(let i=0; i<800-80; i+=40){
        ground(i,370)
    }
    //след этаж
    for (let i=160; i<160+120; i+=40){
        earth(i,350)
    }
    for (let i=320; i<320+40*9; i+=80){
        earth(i,350)
    }
    for (let i=280; i<320+40*9; i+=80){
        lakerect(i,350, "#54ff00")
    }
    slideleft(800-120,350)
    lift(720,370,"aqua")
    ground(760,370)
    platform(760,370-3,"aqua")
    //боковые стенки
    for (let i=370; i<600; i+=10){
        ground(0,i)
    }
    for (let i=370; i<600; i+=10){
        ground(760,i)
    }
    //подслой
    for (let i=40; i<800-40; i+=40){
        ground(i,590)
    }
    for (let i=40; i<800-40; i+=40){
        ground(i,580)
    }
    //первый этаж
    for (let i=40; i<800-40; i+=40){
        earth(i,560)
    }
    platform(640,560,"aqua")
    
    for (let i=40; i<800-40*9; i+=40){
        earth(i,460)
    }
    earth(800-40*8, 460+30)
    earth(800-40*7, 460+50)
    
    question(280,600-80)
    
    
    door(80,500,"blue")
    door(80,500-100,"red")
}

export{draw}