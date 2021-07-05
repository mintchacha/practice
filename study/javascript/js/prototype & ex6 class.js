'use strick'

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

//연습
// find 메소드 크로스브라우징에 대한 polyfill 코드
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

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
hero.prototype = character.prototype;
let hero_w = '';
let hero_A = '';
hero.Equip(hero_w, hero_A)

const monster = new character(2,3);
monster.Equip('참철검','가죽갑옷');
console.log(monster);




// class es6에 추가됨
class Animal {
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.type);
    }
}

//extends = 클래스 상속m super 상속된 constructor 불러오기
class Dog extends Animal{
    constructor(name, sound){
        super('개',name, sound)
    }
}

class Cat extends Animal{
    constructor(name, sound){
        super('고양이',name, sound)
    }
}

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('고양이','야옹');

// dog.say();
// cat.say();


class Food {
    constructor(name){
        this.name = name
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand);
    }
    print(){
        console.log(`${this.name} 을 파는 음식점들:`);
        console.log(this.brands.join(','));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛')
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
