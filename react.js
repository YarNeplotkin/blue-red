import { massivStructur } from "./game.js";
import { heroes } from "./phisicGame.js";

//реакция опоры

function strengthOfReaction(){
 
    massivStructur.forEach(guy => {

        // красный

        // земля
        if(heroes[0].yi>guy.Y-25 && heroes[0].xi>=guy.X){
            if(guy.type==="earth" &&  heroes[0].yi<=guy.Y-20 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y-25
            } 
        }
        if(heroes[0].yi<guy.Y+35 && heroes[0].xi>=guy.X){
            if(guy.type==="earth" &&  heroes[0].yi>=guy.Y+28 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y+35
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi>guy.X-7){
            if(guy.type==="earth" &&  heroes[0].yi<=guy.Y+30 &&  heroes[0].xi<=guy.X+10){
                heroes[0].xi=guy.X-7
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi<guy.X+47){
            if(guy.type==="earth" &&  heroes[0].yi<=guy.Y+30 &&  heroes[0].xi>=guy.X+30){
                heroes[0].xi=guy.X+47
            } 
        }
        


        // почва
        if(heroes[0].yi>guy.Y-25 && heroes[0].xi>=guy.X){
            if(guy.type==="ground" &&  heroes[0].yi<=guy.Y-20 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y-25
            } 
        }
        if(heroes[0].yi<guy.Y+15 && heroes[0].xi>=guy.X){
            if(guy.type==="ground" &&  heroes[0].yi>=guy.Y+9 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y+15
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi>guy.X-7){
            if(guy.type==="ground" &&  heroes[0].yi<=guy.Y+10 &&  heroes[0].xi<=guy.X+10){
                heroes[0].xi=guy.X-7
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi<guy.X+47){
            if(guy.type==="ground" &&  heroes[0].yi<=guy.Y+10 &&  heroes[0].xi>=guy.X+30){
                heroes[0].xi=guy.X+47
            } 
        }


        // наклонная левая
        if(heroes[0].xi<=guy.X+2*1 && heroes[0].yi>guy.Y-25+1*0) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*0 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*1
            }
        }
        if(heroes[0].xi<=guy.X+2*2 && heroes[0].yi>guy.Y-25+1*1) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*1 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*2
            }
        }
        if(heroes[0].xi<=guy.X+2*3 && heroes[0].yi>guy.Y-25+1*2) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*2 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*3
            }
        }
        if(heroes[0].xi<=guy.X+2*4 && heroes[0].yi>guy.Y-25+1*3) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*3 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*4
            }
        }
        if(heroes[0].xi<=guy.X+2*5 && heroes[0].yi>guy.Y-25+1*4) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*4 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*5
            }
        }
        if(heroes[0].xi<=guy.X+2*6 && heroes[0].yi>guy.Y-25+1*5) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*5 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*6
            }
        }
        if(heroes[0].xi<=guy.X+2*7 && heroes[0].yi>guy.Y-25+1*6) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*6 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*7
            }
        }
        if(heroes[0].xi<=guy.X+2*8 && heroes[0].yi>guy.Y-25+1*7) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*7 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*8
            }
        }
        if(heroes[0].xi<=guy.X+2*9 && heroes[0].yi>guy.Y-25+1*8) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*8 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*9
            }
        }
        if(heroes[0].xi<=guy.X+2*10 && heroes[0].yi>guy.Y-25+1*9) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*9 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*10
            }
        }
        if(heroes[0].xi<=guy.X+2*11 && heroes[0].yi>guy.Y-25+1*10) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*10 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*11
            }
        }
        if(heroes[0].xi<=guy.X+2*12 && heroes[0].yi>guy.Y-25+1*11) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*11 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*12
            }
        }
        if(heroes[0].xi<=guy.X+2*13 && heroes[0].yi>guy.Y-25+1*12) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*12 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*13
            }
        }
        if(heroes[0].xi<=guy.X+2*14 && heroes[0].yi>guy.Y-25+1*13) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*13 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*14
            }
        }
        if(heroes[0].xi<=guy.X+2*15 && heroes[0].yi>guy.Y-25+1*14) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*14 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*15
            }
        }
        if(heroes[0].xi<=guy.X+2*16 && heroes[0].yi>guy.Y-25+1*15) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*15 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*16
            }
        }
        if(heroes[0].xi<=guy.X+2*17 && heroes[0].yi>guy.Y-25+1*16) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*16 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*17
            }
        }
        if(heroes[0].xi<=guy.X+2*18 && heroes[0].yi>guy.Y-25+1*17) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*17 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*18
            }
        }
        if(heroes[0].xi<=guy.X+2*19 && heroes[0].yi>guy.Y-25+1*18) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*18 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*19
            }
        }
        if(heroes[0].xi<=guy.X+2*20 && heroes[0].yi>guy.Y-25+1*19) {
            if(guy.type==="slideleft" && heroes[0].xi>guy.X+2*19 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*20
            }
        }

        // правая наклонная
        if(heroes[0].xi<=guy.X+2*1 && heroes[0].yi>guy.Y-25+1*19) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*0 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*20
            }
        }
        if(heroes[0].xi<=guy.X+2*2 && heroes[0].yi>guy.Y-25+1*18) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*1 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*19
            }
        }
        if(heroes[0].xi<=guy.X+2*3 && heroes[0].yi>guy.Y-25+1*17) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*2 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*18
            }
        }
        if(heroes[0].xi<=guy.X+2*4 && heroes[0].yi>guy.Y-25+1*16) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*3 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*17
            }
        }
        if(heroes[0].xi<=guy.X+2*5 && heroes[0].yi>guy.Y-25+1*15) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*4 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*16
            }
        }
        if(heroes[0].xi<=guy.X+2*6 && heroes[0].yi>guy.Y-25+1*14) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*5 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*15
            }
        }
        if(heroes[0].xi<=guy.X+2*7 && heroes[0].yi>guy.Y-25+1*13) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*6 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*14
            }
        }
        if(heroes[0].xi<=guy.X+2*8 && heroes[0].yi>guy.Y-25+1*12) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*7 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*13
            }
        }
        if(heroes[0].xi<=guy.X+2*9 && heroes[0].yi>guy.Y-25+1*11) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*8 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*12
            }
        }
        if(heroes[0].xi<=guy.X+2*10 && heroes[0].yi>guy.Y-25+1*10) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*9 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*11
            }
        }
        if(heroes[0].xi<=guy.X+2*11 && heroes[0].yi>guy.Y-25+1*9) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*10 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*10
            }
        }
        if(heroes[0].xi<=guy.X+2*12 && heroes[0].yi>guy.Y-25+1*8) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*11 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*9
            }
        }
        if(heroes[0].xi<=guy.X+2*13 && heroes[0].yi>guy.Y-25+1*7) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*12 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*8
            }
        }
        if(heroes[0].xi<=guy.X+2*14 && heroes[0].yi>guy.Y-25+1*6) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*13 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*7
            }
        }
        if(heroes[0].xi<=guy.X+2*15 && heroes[0].yi>guy.Y-25+1*5) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*14 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*6
            }
        }
        if(heroes[0].xi<=guy.X+2*16 && heroes[0].yi>guy.Y-25+1*4) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*15 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*5
            }
        }
        if(heroes[0].xi<=guy.X+2*17 && heroes[0].yi>guy.Y-25+1*3) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*16 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*4
            }
        }
        if(heroes[0].xi<=guy.X+2*18 && heroes[0].yi>guy.Y-25+1*2) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*17 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*3
            }
        }
        if(heroes[0].xi<=guy.X+2*19 && heroes[0].yi>guy.Y-25+1*1) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*18 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*2
            }
        }
        if(heroes[0].xi<=guy.X+2*20 && heroes[0].yi>guy.Y-25+1*0) {
            if(guy.type==="slideright" && heroes[0].xi>guy.X+2*19 && heroes[0].yi<=guy.Y+30){
                heroes[0].yi=guy.Y-25+1*1
            }
        }

        // синий

        // земля
        if(heroes[1].yi>guy.Y-25 && heroes[1].xi>=guy.X){
            if(guy.type==="earth" &&  heroes[1].yi<=guy.Y-20 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y-25
            } 
        }
        if(heroes[1].yi<guy.Y+35 && heroes[1].xi>=guy.X){
            if(guy.type==="earth" &&  heroes[1].yi>=guy.Y+28 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y+35
            } 
        }
        if(heroes[1].yi>guy.Y-15 && heroes[1].xi>guy.X-7){
            if(guy.type==="earth" &&  heroes[1].yi<=guy.Y+30 &&  heroes[1].xi<=guy.X+10){
                heroes[1].xi=guy.X-7
            } 
        }
        if(heroes[1].yi>guy.Y-15 && heroes[1].xi<guy.X+47){
            if(guy.type==="earth" &&  heroes[1].yi<=guy.Y+30 &&  heroes[1].xi>=guy.X+30){
                heroes[1].xi=guy.X+47
            } 
        }
        


        // почва
        if(heroes[1].yi>guy.Y-25 && heroes[1].xi>=guy.X){
            if(guy.type==="ground" &&  heroes[1].yi<=guy.Y-20 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y-25
            } 
        }
        if(heroes[1].yi<guy.Y+15 && heroes[1].xi>=guy.X){
            if(guy.type==="ground" &&  heroes[1].yi>=guy.Y+9 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y+15
            } 
        }
        if(heroes[1].yi>guy.Y-15 && heroes[1].xi>guy.X-7){
            if(guy.type==="ground" &&  heroes[1].yi<=guy.Y+10 &&  heroes[1].xi<=guy.X+10){
                heroes[1].xi=guy.X-7
            } 
        }
        if(heroes[1].yi>guy.Y-15 && heroes[1].xi<guy.X+47){
            if(guy.type==="ground" &&  heroes[1].yi<=guy.Y+10 &&  heroes[1].xi>=guy.X+30){
                heroes[1].xi=guy.X+47
            } 
        }


        // наклонная левая
        if(heroes[1].xi<=guy.X+2*1 && heroes[1].yi>guy.Y-25+1*0) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*0 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*1
            }
        }
        if(heroes[1].xi<=guy.X+2*2 && heroes[1].yi>guy.Y-25+1*1) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*1 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*2
            }
        }
        if(heroes[1].xi<=guy.X+2*3 && heroes[1].yi>guy.Y-25+1*2) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*2 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*3
            }
        }
        if(heroes[1].xi<=guy.X+2*4 && heroes[1].yi>guy.Y-25+1*3) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*3 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*4
            }
        }
        if(heroes[1].xi<=guy.X+2*5 && heroes[1].yi>guy.Y-25+1*4) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*4 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*5
            }
        }
        if(heroes[1].xi<=guy.X+2*6 && heroes[1].yi>guy.Y-25+1*5) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*5 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*6
            }
        }
        if(heroes[1].xi<=guy.X+2*7 && heroes[1].yi>guy.Y-25+1*6) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*6 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*7
            }
        }
        if(heroes[1].xi<=guy.X+2*8 && heroes[1].yi>guy.Y-25+1*7) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*7 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*8
            }
        }
        if(heroes[1].xi<=guy.X+2*9 && heroes[1].yi>guy.Y-25+1*8) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*8 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*9
            }
        }
        if(heroes[1].xi<=guy.X+2*10 && heroes[1].yi>guy.Y-25+1*9) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*9 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*10
            }
        }
        if(heroes[1].xi<=guy.X+2*11 && heroes[1].yi>guy.Y-25+1*10) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*10 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*11
            }
        }
        if(heroes[1].xi<=guy.X+2*12 && heroes[1].yi>guy.Y-25+1*11) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*11 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*12
            }
        }
        if(heroes[1].xi<=guy.X+2*13 && heroes[1].yi>guy.Y-25+1*12) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*12 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*13
            }
        }
        if(heroes[1].xi<=guy.X+2*14 && heroes[1].yi>guy.Y-25+1*13) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*13 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*14
            }
        }
        if(heroes[1].xi<=guy.X+2*15 && heroes[1].yi>guy.Y-25+1*14) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*14 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*15
            }
        }
        if(heroes[1].xi<=guy.X+2*16 && heroes[1].yi>guy.Y-25+1*15) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*15 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*16
            }
        }
        if(heroes[1].xi<=guy.X+2*17 && heroes[1].yi>guy.Y-25+1*16) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*16 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*17
            }
        }
        if(heroes[1].xi<=guy.X+2*18 && heroes[1].yi>guy.Y-25+1*17) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*17 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*18
            }
        }
        if(heroes[1].xi<=guy.X+2*19 && heroes[1].yi>guy.Y-25+1*18) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*18 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*19
            }
        }
        if(heroes[1].xi<=guy.X+2*20 && heroes[1].yi>guy.Y-25+1*19) {
            if(guy.type==="slideleft" && heroes[1].xi>guy.X+2*19 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*20
            }
        }

        // правая наклонная
        if(heroes[1].xi<=guy.X+2*1 && heroes[1].yi>guy.Y-25+1*19) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*0 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*20
            }
        }
        if(heroes[1].xi<=guy.X+2*2 && heroes[1].yi>guy.Y-25+1*18) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*1 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*19
            }
        }
        if(heroes[1].xi<=guy.X+2*3 && heroes[1].yi>guy.Y-25+1*17) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*2 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*18
            }
        }
        if(heroes[1].xi<=guy.X+2*4 && heroes[1].yi>guy.Y-25+1*16) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*3 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*17
            }
        }
        if(heroes[1].xi<=guy.X+2*5 && heroes[1].yi>guy.Y-25+1*15) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*4 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*16
            }
        }
        if(heroes[1].xi<=guy.X+2*6 && heroes[1].yi>guy.Y-25+1*14) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*5 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*15
            }
        }
        if(heroes[1].xi<=guy.X+2*7 && heroes[1].yi>guy.Y-25+1*13) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*6 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*14
            }
        }
        if(heroes[1].xi<=guy.X+2*8 && heroes[1].yi>guy.Y-25+1*12) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*7 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*13
            }
        }
        if(heroes[1].xi<=guy.X+2*9 && heroes[1].yi>guy.Y-25+1*11) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*8 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*12
            }
        }
        if(heroes[1].xi<=guy.X+2*10 && heroes[1].yi>guy.Y-25+1*10) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*9 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*11
            }
        }
        if(heroes[1].xi<=guy.X+2*11 && heroes[1].yi>guy.Y-25+1*9) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*10 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*10
            }
        }
        if(heroes[1].xi<=guy.X+2*12 && heroes[1].yi>guy.Y-25+1*8) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*11 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*9
            }
        }
        if(heroes[1].xi<=guy.X+2*13 && heroes[1].yi>guy.Y-25+1*7) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*12 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*8
            }
        }
        if(heroes[1].xi<=guy.X+2*14 && heroes[1].yi>guy.Y-25+1*6) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*13 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*7
            }
        }
        if(heroes[1].xi<=guy.X+2*15 && heroes[1].yi>guy.Y-25+1*5) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*14 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*6
            }
        }
        if(heroes[1].xi<=guy.X+2*16 && heroes[1].yi>guy.Y-25+1*4) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*15 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*5
            }
        }
        if(heroes[1].xi<=guy.X+2*17 && heroes[1].yi>guy.Y-25+1*3) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*16 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*4
            }
        }
        if(heroes[1].xi<=guy.X+2*18 && heroes[1].yi>guy.Y-25+1*2) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*17 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*3
            }
        }
        if(heroes[1].xi<=guy.X+2*19 && heroes[1].yi>guy.Y-25+1*1) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*18 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*2
            }
        }
        if(heroes[1].xi<=guy.X+2*20 && heroes[1].yi>guy.Y-25+1*0) {
            if(guy.type==="slideright" && heroes[1].xi>guy.X+2*19 && heroes[1].yi<=guy.Y+30){
                heroes[1].yi=guy.Y-25+1*1
            }
        }

        // шипы
        if(heroes[0].xi>guy.X && heroes[0].yi>=guy.Y+10-25){
            if(guy.type==="spike" && heroes[0].xi<=guy.X+20 && heroes[0].yi<guy.Y+20-25){
                alert("Только не лопни. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].xi>guy.X && heroes[1].yi>=guy.Y+10-25){
            if(guy.type==="spike" && heroes[1].xi<=guy.X+20 && heroes[1].yi<guy.Y+20-25){
                alert("Только не лопни. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }


        //озеро
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakeleft" && heroes[0].xi>guy.X+7){
            if(guy.color==="blue" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+40){
                alert("Не Ной, утонешь. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakerect" && heroes[0].xi>guy.X){
            if(guy.color==="blue" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+40){
                alert("Не Ной, утонешь. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakeright" && heroes[0].xi>guy.X){
            if(guy.color==="blue" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+34){
                alert("Не Ной, утонешь. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakeleft" && heroes[1].xi>guy.X+7){
            if(guy.color==="red" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+40){
                alert("Гори-Гори-Ясно... Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakerect" && heroes[1].xi>guy.X){
            if(guy.color==="red" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+40){
                alert("Гори-Гори-Ясно... Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakeright" && heroes[1].xi>guy.X){
            if(guy.color==="red" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+34){
                alert("Гори-Гори-Ясно... Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakeleft" && heroes[0].xi>guy.X+7){
            if(guy.color==="#54ff00" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+40){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakerect" && heroes[0].xi>guy.X){
            if(guy.color==="#54ff00" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+40){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[0].yi<guy.Y+10-25 && guy.type==="lakeright" && heroes[0].xi>guy.X){
            if(guy.color==="#54ff00" && heroes[0].yi>=guy.Y-25 && heroes[0].xi<guy.X+34){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakeleft" && heroes[1].xi>guy.X+7){
            if(guy.color==="#54ff00" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+40){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakerect" && heroes[1].xi>guy.X){
            if(guy.color==="#54ff00" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+40){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }
        if(heroes[1].yi<guy.Y+10-25 && guy.type==="lakeright" && heroes[1].xi>guy.X){
            if(guy.color==="#54ff00" && heroes[1].yi>=guy.Y-25 && heroes[1].xi<guy.X+34){
                alert("А мама говорила: 'пей меньше газировки'. Попробуй ещё раз.")
                heroes[0].xi=42
                heroes[0].yi=85
                heroes[1].xi=100
                heroes[1].yi=85
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift"){
                        if(meh.color==="gold"){
                            meh.Y=20
                        }
                    }
                })
            }
        }

        // платформа -- лифт
        if(heroes[1].yi>=guy.Y-28 && heroes[1].xi>=guy.X && guy.type==="platform"  && guy.color==="gold"){
            if(heroes[1].yi<guy.Y-20 && heroes[1].xi<=guy.X+40){
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift" && meh.color==="gold"){
                        if(meh.Y<=85){
                            meh.Y++
                        }
                    }
                })
            }
        }
        if(heroes[1].yi>=guy.Y-28 && heroes[1].xi>=guy.X && guy.type==="platform"  && guy.color==="#b62ec8"){
            if(heroes[1].yi<guy.Y-20 && heroes[1].xi<=guy.X+40){
                massivStructur.forEach(meh=>{
                    if(meh.type==="lift" && meh.color==="#b62ec8"){
                        if(meh.Y<=200){
                            meh.Y++
                        }
                    }
                })
            }
        } 
        // else{
        //     massivStructur.forEach(meh=>{
        //         if(meh.type==="lift" && meh.color==="#b62ec8"){
        //             if(meh.Y<=130){
        //                 meh.Y--
        //             }
        //         }
        //     })
            
        // }
        if(heroes[0].yi>guy.Y-25 && heroes[0].xi>=guy.X){
            if(guy.type==="lift" &&  heroes[0].yi<=guy.Y-20 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y-25
            } 
        }
        if(heroes[0].yi<guy.Y+15 && heroes[0].xi>=guy.X){
            if(guy.type==="lift" &&  heroes[0].yi>=guy.Y+9 &&  heroes[0].xi<=guy.X+40){
                heroes[0].yi=guy.Y+15
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi>guy.X-7){
            if(guy.type==="lift" &&  heroes[0].yi<=guy.Y+10 &&  heroes[0].xi<=guy.X+10){
                heroes[0].xi=guy.X-7
            } 
        }
        if(heroes[0].yi>=guy.Y-15 && heroes[0].xi<guy.X+47){
            if(guy.type==="lift" &&  heroes[0].yi<=guy.Y+10 &&  heroes[0].xi>=guy.X+30){
                heroes[0].xi=guy.X+47
            } 
        }
        if(heroes[1].yi>guy.Y-25 && heroes[1].xi>=guy.X){
            if(guy.type==="lift" &&  heroes[1].yi<=guy.Y-20 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y-25
            } 
        }
        if(heroes[1].yi<guy.Y+15 && heroes[1].xi>=guy.X){
            if(guy.type==="lift" &&  heroes[1].yi>=guy.Y+9 &&  heroes[1].xi<=guy.X+40){
                heroes[1].yi=guy.Y+15
            } 
        }
        if(heroes[1].yi>=guy.Y-15 && heroes[1].xi>guy.X-7){
            if(guy.type==="lift" &&  heroes[1].yi<=guy.Y+10 &&  heroes[1].xi<=guy.X+10){
                heroes[1].xi=guy.X-7
            } 
        }
        if(heroes[1].yi>=guy.Y-15 && heroes[1].xi<guy.X+47){
            if(guy.type==="lift" &&  heroes[1].yi<=guy.Y+10 &&  heroes[1].xi>=guy.X+30){
                heroes[1].xi=guy.X+47
            } 
        }
    })

}

export {strengthOfReaction}