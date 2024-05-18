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
    square1.setAttribute("height", 23)
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
function lakeleft(X,Y,color){
    const triangle = `
    <polygon fill="${color}" points="${X+6} ${Y+3}, ${X+40} ${Y+3}, ${X+40} ${Y+20}"/>
    `
    svg.insertAdjacentHTML("beforeend", triangle)
}
function lakeright(X,Y,color){
    const triangle = `
    <polygon fill="${color}" points="${X} ${Y+3}, ${X+34} ${Y+3}, ${X} ${Y+20}"/>
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

const massivStructur = [
    
    // вход
    {type: "door", X: 20, Y:20, color: "red"},
    {type: "door", X: 80, Y:20, color: "blue"},
    

    // левая стенка
    {type: "ground", X: 0, Y: 290},
    {type: "ground", X: 0, Y: 300},
    {type: "ground", X: 0, Y: 310},
    {type: "ground", X: 0, Y: 320},
    {type: "ground", X: 0, Y: 330},
    {type: "ground", X: 0, Y: 340},
    {type: "ground", X: 0, Y: 350},
    {type: "ground", X: 0, Y: 360},
    {type: "ground", X: 0, Y: 370},
    {type: "ground", X: 0, Y: 380},
    {type: "ground", X: 0, Y: 390},
    {type: "ground", X: 0, Y: 400},
    {type: "ground", X: 0, Y: 410},
    {type: "ground", X: 0, Y: 420},
    {type: "ground", X: 0, Y: 430},
    {type: "ground", X: 0, Y: 440},
    {type: "ground", X: 0, Y: 450},
    {type: "ground", X: 0, Y: 460},
    {type: "ground", X: 0, Y: 470},
    {type: "ground", X: 0, Y: 480},
    {type: "ground", X: 0, Y: 490},
    {type: "ground", X: 0, Y: 500},
    {type: "ground", X: 0, Y: 510},
    {type: "ground", X: 0, Y: 520},
    {type: "ground", X: 0, Y: 530},
    {type: "ground", X: 0, Y: 540},
    {type: "ground", X: 0, Y: 550},
    {type: "ground", X: 0, Y: 560},
    {type: "ground", X: 0, Y: 570},
    {type: "ground", X: 0, Y: 580},
    {type: "ground", X: 0, Y: 590},
    {type: "slideleft", X: 40, Y: 290},


    {type: "ground", X: 40, Y: 310},
    {type: "ground", X: 40, Y: 320},
    {type: "ground", X: 40, Y: 330},
    {type: "ground", X: 40, Y: 340},
    {type: "ground", X: 40, Y: 350},
    {type: "ground", X: 40, Y: 360},
    {type: "slideleft", X: 80, Y: 310},

    {type: "ground", X: 80, Y: 330},
    {type: "ground", X: 80, Y: 340},
    {type: "ground", X: 80, Y: 350},
    {type: "ground", X: 80, Y: 360},
    {type: "slideleft", X: 120, Y: 330},


    {type: "ground", X: 120, Y: 350},
    {type: "ground", X: 120, Y: 360},


    // правая стенка
    {type: "ground", X: 760, Y: 370},
    {type: "ground", X: 760, Y: 380},
    {type: "ground", X: 760, Y: 390},
    {type: "ground", X: 760, Y: 400},
    {type: "ground", X: 760, Y: 410},
    {type: "ground", X: 760, Y: 420},
    {type: "ground", X: 760, Y: 430},
    {type: "ground", X: 760, Y: 440},
    {type: "ground", X: 760, Y: 450},
    {type: "ground", X: 760, Y: 460},
    {type: "ground", X: 760, Y: 470},
    {type: "ground", X: 760, Y: 480},
    {type: "ground", X: 760, Y: 490},
    {type: "ground", X: 760, Y: 500},
    {type: "ground", X: 760, Y: 510},
    {type: "ground", X: 760, Y: 520},
    {type: "ground", X: 760, Y: 530},
    {type: "ground", X: 760, Y: 540},
    {type: "ground", X: 760, Y: 550},
    {type: "ground", X: 760, Y: 560},
    {type: "ground", X: 760, Y: 570},
    {type: "ground", X: 760, Y: 580},
    {type: "ground", X: 760, Y: 590},


    //первый этаж
    {type: "earth", X: 580, Y: 80},
    {type: "earth", X: 0, Y: 110},
    {type: "earth", X: 40, Y: 110},
    {type: "earth", X: 80, Y: 110},
    {type: "earth", X: 120, Y: 110},
    {type: "earth", X: 360, Y: 110},
    {type: "earth", X: 400, Y: 110},
    {type: "earth", X: 440, Y: 110},
    {type: "earth", X: 480, Y: 110},
    {type: "earth", X: 680, Y: 110},

    {type: "ground", X: 160, Y: 130},
    {type: "ground", X: 200, Y: 130},
    {type: "ground", X: 240, Y: 130},
    {type: "ground", X: 280, Y: 130},
    {type: "ground", X: 320, Y: 130},
    {type: "ground", X: 520, Y: 130},
    {type: "ground", X: 560, Y: 130},
    {type: "ground", X: 600, Y: 130},
    {type: "ground", X: 640, Y: 130},
    {type: "ground", X: 720, Y: 130},

    {type: "slideleft", X: 160, Y: 110},
    {type: "slideright", X: 320, Y: 110},
    {type: "slideleft", X: 720, Y: 110},


    //второй этаж
    {type: "earth", X: 760, Y: 230},
    {type: "earth", X: 720, Y: 230},
    {type: "earth", X: 680, Y: 230},
    {type: "earth", X: 640, Y: 230},
    {type: "earth", X: 600, Y: 230},
    {type: "earth", X: 280, Y: 230},
    {type: "earth", X: 240, Y: 230},
    {type: "earth", X: 200, Y: 230},
    {type: "earth", X: 160, Y: 230},
    {type: "earth", X: 120, Y: 230},

    {type: "ground", X: 560, Y: 250},
    {type: "ground", X: 520, Y: 250},
    {type: "ground", X: 480, Y: 250},
    {type: "ground", X: 440, Y: 250},
    {type: "ground", X: 400, Y: 250},
    {type: "ground", X: 360, Y: 250},
    {type: "ground", X: 320, Y: 250},
    {type: "ground", X: 80, Y: 250},

    {type: "slideright", X: 80, Y: 230},


    // третий этаж
    {type: "earth", X: 160, Y: 350},
    {type: "earth", X: 200, Y: 350},
    {type: "earth", X: 240, Y: 350},
    {type: "earth", X: 320, Y: 350},
    {type: "earth", X: 400, Y: 350},
    {type: "earth", X: 480, Y: 350},
    {type: "earth", X: 560, Y: 350},
    {type: "earth", X: 640, Y: 350},

    {type: "ground", X: 40, Y: 370},
    {type: "ground", X: 80, Y: 370},
    {type: "ground", X: 120, Y: 370},
    {type: "ground", X: 280, Y: 370},
    {type: "ground", X: 360, Y: 370},
    {type: "ground", X: 440, Y: 370},
    {type: "ground", X: 520, Y: 370},
    {type: "ground", X: 600, Y: 370},
    {type: "ground", X: 680, Y: 370},
    {type: "ground", X: 760, Y: 370},

    {type: "slideleft", X: 680, Y: 350},


    //четвёртый этаж
    {type: "earth", X: 40, Y: 460},
    {type: "earth", X: 80, Y: 460},
    {type: "earth", X: 120, Y: 460},
    {type: "earth", X: 160, Y: 460},
    {type: "earth", X: 200, Y: 460},
    {type: "earth", X: 240, Y: 460},
    {type: "earth", X: 280, Y: 460},
    {type: "earth", X: 320, Y: 460},
    {type: "earth", X: 360, Y: 460},

    {type: "earth", X: 720, Y: 570},
    {type: "earth", X: 680, Y: 570},
    {type: "earth", X: 640, Y: 570},
    {type: "earth", X: 600, Y: 570},
    {type: "earth", X: 560, Y: 570},
    {type: "earth", X: 520, Y: 570},
    {type: "earth", X: 480, Y: 570},
    {type: "earth", X: 440, Y: 570},
    {type: "earth", X: 400, Y: 570},
    {type: "earth", X: 360, Y: 570},
    {type: "earth", X: 320, Y: 570},
    {type: "earth", X: 280, Y: 570},
    {type: "earth", X: 240, Y: 570},
    {type: "earth", X: 200, Y: 570},
    {type: "earth", X: 160, Y: 570},
    {type: "earth", X: 120, Y: 570},
    {type: "earth", X: 80, Y: 570},
    {type: "earth", X: 40, Y: 570},

    {type: "earth", X: 400, Y: 490},    


    //ловушки
    {type: "lakeleft", X: 160, Y: 110, color:"blue"},//1
    {type: "lakerect", X: 200, Y: 110, color:"blue"},
    {type: "lakerect", X: 240, Y: 110, color:"blue"},
    {type: "lakerect", X: 280, Y: 110, color:"blue"},
    {type: "lakeright", X: 320, Y: 110, color:"blue"},

    {type: "spike", X: 520, Y: 110},
    {type: "spike", X: 540, Y: 110},
    {type: "spike", X: 560, Y: 110},
    {type: "spike", X: 580, Y: 110},
    {type: "spike", X: 600, Y: 110},
    {type: "spike", X: 620, Y: 110},
    {type: "spike", X: 640, Y: 110},
    {type: "spike", X: 660, Y: 110},

    {type: "spike", X: 580, Y: 230},//2
    {type: "spike", X: 560, Y: 230},
    {type: "spike", X: 540, Y: 230},
    {type: "spike", X: 520, Y: 230},
    {type: "spike", X: 500, Y: 230},
    {type: "spike", X: 480, Y: 230},
    {type: "spike", X: 460, Y: 230},
    {type: "spike", X: 440, Y: 230},
    {type: "spike", X: 420, Y: 230},
    {type: "spike", X: 400, Y: 230},
    {type: "spike", X: 380, Y: 230},
    {type: "spike", X: 360, Y: 230},
    {type: "spike", X: 340, Y: 230},
    {type: "spike", X: 320, Y: 230},

    {type: "lakerect", X: 280, Y: 350, color:"#54ff00"},//3
    {type: "lakerect", X: 360, Y: 350, color:"#54ff00"},
    {type: "lakerect", X: 440, Y: 350, color:"#54ff00"},
    {type: "lakerect", X: 520, Y: 350, color:"#54ff00"},
    {type: "lakerect", X: 600, Y: 350, color:"#54ff00"},


    //механизмы
    {type: "platform", X: 680, Y: 107, color:"#b62ec8"},//1
    {type: "lift", X: 760, Y: 130, color:"#b62ec8"},
    {type: "platform", X: 440, Y: 107, color:"gold"},
    {type: "lift", X: 240, Y: 20, color:"gold"},

    {type: "platform", X: 720, Y: 227, color:"#b62ec8"},//2
    {type: "platform", X: 640, Y: 227, color:"red"},
    {type: "platform", X: 240, Y: 227, color:"blue"},
    {type: "lift", X: 560, Y: 145, color:"red"},
    {type: "lift", X: 520, Y: 145, color:"blue"},
    {type: "lift", X: 480, Y: 145, color:"red"},
    {type: "lift", X: 440, Y: 145, color:"blue"},
    {type: "lift", X: 400, Y: 145, color:"red"},
    {type: "lift", X: 360, Y: 145, color:"blue"},
    {type: "lift", X: 320, Y: 145, color:"red"},

    {type: "platform", X: 760, Y: 367, color:"aqua"},//3
    {type: "lift", X: 720, Y: 370, color:"aqua"},

    {type: "platform", X: 640, Y: 567, color:"aqua"},//4
    {type: "question", X: 280, Y: 520},


    //выход
    {type: "door", X: 80, Y:400, color: "red"},
    {type: "door", X: 80, Y:510, color: "blue"},

]

export{massivStructur}


function draw(){
    
    massivStructur.forEach(element => {
    
        //земля
        if(element.type==="earth"){
            earth(element.X, element.Y)
        }
        if(element.type==="ground"){
            ground(element.X, element.Y)
        }
        if(element.type==="slideleft"){
            slideleft(element.X, element.Y)
        }
        if(element.type==="slideright"){
            slideright(element.X, element.Y)
        }
    
        //озеро
        if(element.type==="lakerect"){
            lakerect(element.X, element.Y, element.color)
        }
        if(element.type==="lakeleft"){
            lakeleft(element.X, element.Y, element.color)
        }
        if(element.type==="lakeright"){
            lakeright(element.X, element.Y, element.color)
        }
    
        // двери
        if(element.type==="door"){
            door(element.X, element.Y, element.color)
        }
    
        // платформа, лифт
        if(element.type==="platform"){
            platform(element.X, element.Y, element.color)
        }
        if(element.type==="lift"){
            lift(element.X, element.Y, element.color)
        }
    
        // шипы
        if(element.type==="spike"){
            spike(element.X, element.Y)
        }
    
        // вопрос
        if(element.type==="question"){
            question(element.X, element.Y)
        }
    });

}

export{draw}