"use strick"

const target = document.querySelector("scr_chat li");

window.addEventListener("scroll", ()=>{
    let sct = document.querySelectorAll(".scr_chat li")

    console.log(sct);
    if(sct.TOP < 300){
        console.log("넘어감");
    }
})


const scrolledTopLength = pageYOffset;
const absoluteTop = scrolledTopLength + sct.top;







