let button = document.querySelectorAll(".button");
// let numbers = document.querySelectorAll(".num");
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
        console.log(string);
        mainScreen.innerText = string;
    })
})

// numbers.forEach((num) => {
//     num.addEventListener("click", ()=>{
//         eachNum.push(num.innerText);
//         console.log(eachNum);
//         mainScreen.innerText === '0'?  mainScreen.innerText = num.innerText :  mainScreen.innerText =  mainScreen.innerText + num.innerText;
//     })
// })

// operator.forEach((opr) => {
//     opr.addEventListener("click", ()=>{
//         eachOpr = opr.innerText;
//         console.log(eachOpr);
//         mainScreen.innerText =  mainScreen.innerText + opr.innerText;
//     })
// })

equalTo.addEventListener("click", ()=> {
    try {
        calculate();
    }
    catch (error) {
        mainScreen.innerText = "Error!";
    }
    // mainScreen.innerText = eval(string);
    // eachNum = [result];
    // mainScreen.innerText = result;
    // mainScreen.innerText = result2;
})

clear.addEventListener("click", ()=>{
    reset();
});





// operator.forEach((opr) => {
//     opr.addEventListener("click", ()=>{
//         eachOpr = opr.innerText;
//         mainScreen.innerText = mainScreen.innerText + eachOpr;
//     })
// });
// numbers.forEach((num) => {
//     num.addEventListener("click", ()=>{
//         eachNum = num.innerText;
//         mainScreen.innerText = mainScreen.innerText + eachNum;
//         console.log(eachNum, eachOpr);
//     })
// });
