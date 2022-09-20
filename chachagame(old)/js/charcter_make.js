

let inputname = prompt("이름을 입력해 주세요","");
let player = {name : inputname, Lv : 1, HP : 100, MP : 100, ATK : 10, DFS : 1, SPD : 2, EXP : 0, MAX_EXP : 100}

if(inputname === "" || inputname === null){
    inputname = "무명";
}else if(inputname === "최강의힘"){
    player = {name : inputname, Lv : 1, HP : 9999, MP : 100, ATK : 9999, DFS : 1, SPD : 2, EXP : 0, MAX_EXP : 100}    
}

function easyzone(spon){
    
}
    let sliem = {name : "슬라임", Lv : 1, HP : 30, MP : 0, ATK : 5, DFS : 0, SPD : 1, EXP : 30}        
    let wolf = {name : "늑대", Lv : 2, HP : 50, MP : 0, ATK : 10, DFS : 1, SPD : 1, EXP : 20}
    let goblin = {name : "늑대", Lv : 3, HP : 50, MP : 0, ATK : 15, DFS : 1, SPD : 1, EXP : 20}