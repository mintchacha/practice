document.querySelector("section").innerHTML = 
// "<div><img src='../img/prototype_create.png' alt=''></div>" + 
"<div><img src='img/prototype_create.png' alt=''></div>";

function Person(){}
// 함수 생성시 생성자(Constructor)자격이 부여됨
// 함수만 new 키워드 사용할 수 있는 이유

Person.prototype.eyes = 2;
//함수 정의시 protytype Object 도 같이생성되어 prototype이라는 속성으로 접근할수있음
//prototype.Object는 일반전인 객체와 같고 기본으로 constructor와 _proto_를 가지고있음

const kim = new Person();
// Person이라는 함수로 생성된 객체,
//마치 var kim = {}; 와 동일한 문법

console.log(kim);


//연습
const obj = {
    weapon_info : [
        {
            name : '참철검',
            Lv : 15
        },
        {
            name : '지옥참마도',
            Lv : 999
        },
    ],
    weapon : function(item){
        return this.weapon_info.find(weapon_info => weapon_info.name === item) || '비무장';
    },
    armor_info : [
        {
            name : '가죽갑옷',
            Lv : 5
        },
        {
            name : '풀 플레이트 아머',
            Lv : 999
        },
    ],
    armor : function(item){
        return this.armor_info.find(armor_info => armor_info.name === item) || '비무장';
    }
}

function character(Lv,Exp){
    this.Lv = Lv;
    this.Exp = Exp;
}
character.prototype.Equip = function(weapon,armor){
    this.weapon = obj.weapon(weapon)
    this.armor =  obj.armor(armor)
}

const hero = new character(1,2);
// hero.prototype = character.prototype;
let hero_w = '';
let hero_A = '';
hero.Equip(hero_w, hero_A)

const monster = new character(2,3);




// class es6에 추가됨
class Animal {
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.sound);
    }
}

//extends = 클래스 상속m super 상속된 constructor 불러오기
class Dog extends Animal{
    constructor(name, sound){
        super()
    }
}

const dog = new Animal('개' ,'멍멍이', '멍멍')
const cat = new Animal('고양이', "야옹이", "야옹")

dog.say();
cat.say();