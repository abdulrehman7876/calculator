let button = document.querySelectorAll(".button");
let mainScreen = document.querySelector(".main-screen");
let equalTo = document.querySelector("#equal-to");
let clear = document.querySelector("#clear")
let string = "";
let eachOpr;
let screenText;
let result = 0;
let result2 = 1;

reset = ()=> {
    mainScreen.innerText = '0';
    string = "";
}

calculate = ()=>{
    mainScreen.innerText = eval(string);
}

button.forEach((butt)=>{
    butt.addEventListener('mouseover', ()=>{
        butt.style.cursor = "pointer"; 
    })
})


button.forEach((butt)=>{
    butt.addEventListener('click', ()=>{
        string = string + butt.innerText;
        mainScreen.innerText = string;
    })
})


equalTo.addEventListener("click", ()=> {
    try {
        calculate();
    }
    catch (error) {
        mainScreen.innerText = "Error!";
    }

})

clear.addEventListener("click", ()=>{
    reset();
});
