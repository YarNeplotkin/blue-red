const buttonLevelOne = document.getElementById("levelOne")
const gamePict = document.querySelector(".gamePict")
const menu = document.querySelector(".menu")


console.log(menu.classList);


buttonLevelOne.addEventListener("click", ()=>{
    menu.classList.add("hidden")
    gamePict.classList.remove("hidden")
})
