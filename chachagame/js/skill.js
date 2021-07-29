function run_skill(Lv){
    let motion = document.querySelector(".motion");
    var button = document.createElement("button");
    var audio = document.createElement("audio");
    if(Lv === 5){
        get_powerslash();
    }














    powerslash = {ATK : player.ATK * 1.5, MP : 30}
    function get_powerslash(){
        logmessage("파워 슬래쉬를 터득했습니다!","#fdb");
        button.innerHTML = "파워슬래쉬";
        button.setAttribute('onclick', 'play("powerslash")')
        audio.setAttribute('src', '')
        button.setAttribute('style', 'background:left center url(http://creativityweb.co.kr/chachagame/img/powerslash.png) no-repeat #ccc')
        console.log(button);
        motion.appendChild(button);
        motion.appendChild(audio);
    }
}