let bgm = document.querySelector(".bgm");
let bgm_btn_off = document.querySelector(".bgm_btn button:nth-of-type(1)");
let bgm_btn_on = document.querySelector(".bgm_btn button:nth-of-type(2)");
function bgm_off(){
  bgm.pause();
  bgm.currentTime = 0;
  bgm_btn_off.style.display = "none";
  bgm_btn_on.style.display = "inline-block";
}
function bgm_on(){
  bgm.play();
  bgm_btn_on.style.display = "none";
  bgm_btn_off.style.display = "inline-block";
}
function effect_on(e){
  e.play();
  console.log(e);
  e.currentTime = 0;
}

let main = document.querySelector(".main");
let banner = document.querySelector(".banner");
function start(){
  banner.style.display = "none";
  main.style.display = "block";
}
  let player_name = document.querySelector(".player_name");

  let player_Lv = document.querySelector(".player_Lv");
  let player_HP = document.querySelector(".player_HP");
  let player_ATK = document.querySelector(".player_ATK");
  let player_HPbar = document.querySelector(".player_HPbar");
  let player_MP = document.querySelector(".player_MP");
  let player_MPbar = document.querySelector(".player_MPbar");
  let player_EXP = document.querySelector(".player_EXP");
  let player_EXPbar = document.querySelector(".player_EXPbar");
  let log = document.querySelector(".log");

  function logmessage(msg,color){
    if(!color){color = "#000";}
    var div = document.createElement("div");
    div.innerHTML = msg;
    div.style.color = color;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  function player_status(){
  player_name.innerHTML = player.name;
  player_Lv.innerHTML = player.Lv;
  player_HP.innerHTML = player.HP;
  player_MP.innerHTML = player.MP;
  player_ATK.innerHTML = player.ATK;
  player_EXP.innerHTML = player.EXP;
  };
  player_status();
  function monster_spon(){

  }
  
  var meet = true;
  function play(motion){
    if(meet){
      logmessage(sliem.name + "과 조우했습니다! 전투에 돌입합니다.");
      meet = false;
    }
    battle(player,sliem,motion)
  }

  let HPbar = "100%";
  let MPbar = "100%";
  let Max_HP = player.HP*100/100;
  let Max_MP = player.MP*100/100;
  console.log(Max_HP);
  function LvUP(){
    if(player.EXP >= player.MAX_EXP){
      player.Lv ++;
      Max_HP += 10;
      player.HP = Max_HP;
      player.MP = Max_MP;
      HPbar = "100%";
      MPbar = "100%";
      player_HPbar.style.width = "100%";
      player_MPbar.style.width = "100%";
      player.ATK += 3;
      player.EXP = 0;
      effect_on(levelup_ef);
      logmessage("레벨업!!","rgb(209, 235, 65)");
      logmessage("최대 체력 상승!","rgb(209, 235, 65)");
      logmessage("공격력 상승!","rgb(209, 235, 65)");
      run_skill(player.Lv);
      }
  }
  function HPchange(change){
      HPbar = Number(HPbar.replace(/%/gi,""));
      let Damage_HP = change / Max_HP * 100;
      HPbar = HPbar - Damage_HP.toFixed(2) + "%";
      player_HPbar.style.width = HPbar;
  }
  function MPchange(change){
      MPbar = Number(MPbar.replace(/%/gi,""));
      let Damage_MP = change / Max_MP * 100;
      MPbar = MPbar - Damage_MP.toFixed(2) + "%";
      player_MPbar.style.width = MPbar;
  }
  function EXPchange(me,exp){
      player.EXP = me + exp;
      player_EXPbar.style.width = player.EXP + "%";
      if(player.EXP >= player.MAX_EXP){
        player_EXPbar.style.width = "0%";
       }
  }

function Dead(){
    if(player.HP <= 0){
      alert("사망하셨습니다.");
      location.href = location.href;
      return false;
    }
}
  function battle(player,monster,motion){
    let Damage
    if(player.SPD > monster.SPD){
      switch(motion){
        case "powerslash" :
          if(player.MP <= powerslash.MP){
            logmessage("마나가 부족합니다.","#f00");
            return false;
          }
          logmessage("powerslash!!");
          effect_on(powerslash_ef);
          player.MP -= powerslash.MP
          MPchange(powerslash.MP);
          Damage = powerslash.ATK - monster.DFS;
          monster.HP = monster.HP - Damage; 
          break; 
        default : 
          logmessage("player attack!!");
          effect_on(attack_ef);          
          Damage = player.ATK - monster.DFS;
          monster.HP = monster.HP - Damage;   
      }
      logmessage(`${monster.name} ${Damage} 피격!`);
      logmessage(`남은 체력 ${monster.HP}`);

      logmessage("monster attack!!");
      Damage = monster.ATK - player.DFS
      logmessage(`${player.name} ${Damage} 피격!`);
      player.HP = player.HP - Damage;
      HPchange(monster.ATK);
      Dead();
    }
    if(monster.HP <= 0){
      logmessage("승리","#33f");
      EXPchange(player.EXP, monster.EXP);
      LvUP()
      player_status();
      let respone = 30;
      monster.HP = respone;
      meet = true;
      return false;
    }
    if(player.SPD < monster.SPD){
    }
    player_status();
  }