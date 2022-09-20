class Character{
    constructor(name, lv, hp, mp, atk, def, exp){
        this.name = name
        this.lv = lv
        this.hp = hp
        this.mp = mp
        this.atk = atk
        this.def = def
        this.exp = exp
    }
}
// 로그생성
function createlog(txt, color){
    const p = document.createElement('p')
    p.innerHTML = txt
    if(color){
        p.style.color = color
    }else{
        p.style.color = '#333'
    }            
    document.querySelector('main').appendChild(p)
}
// 유저 생성
const level = [5,15,30,60,90,180]
const namebox = document.getElementById('name')
const lvbox = document.getElementById('lv')
const maxhpbox = document.getElementById('maxhp')
const hpbox = document.getElementById('hp')
const maxmpbox = document.getElementById('maxmp')
const mpbox = document.getElementById('mp')
const atkbox = document.getElementById('atk')
const defbox = document.getElementById('def')
const expbox = document.getElementById('exp')
class User extends Character{
    constructor(name, lv, hp, mp, atk, def, exp, inventory){
        super(name, lv, hp, mp, atk, def, exp)
        this.inventory = inventory
    }
    quiry(){
        namebox.innerHTML = this.name
        lvbox.innerHTML = this.lv
        maxhpbox.innerHTML = this.hp.max
        hpbox.innerHTML = this.hp.count
        maxmpbox.innerHTML = this.mp.max
        mpbox.innerHTML = this.mp.count
        atkbox.innerHTML = this.atk
        defbox.innerHTML = this.def
        expbox.innerHTML = this.exp
    }
    damaged(moster){               
        this.hp.count -= moster.atk
        user.quiry()
        createlog(`${this.name}은(는) ${moster.atk}의 피해를 입었다. 남은 체력 ${this.hp.count}`, '#f00')
        if(this.hp.count <= 0){
            alert('사망하셨습니다.')
            location.href = './';
        }
    }
    getExp(get){
        this.exp += get.exp 
        level.forEach((item, index)=>{
            if(this.exp >= level[index]){
                level.shift()
                this.lv ++   
                this.hp.count = this.hp.max 
                createlog(`레벨업`, '#33dddf')
                user.quiry()
            }
        })
    }            
}
// 아이템 생성
class Item {
    constructor(type, name){
        this.type = type
        this.name = name
    }
}
class Weapon extends Item{
    constructor(type, name, atk){
        super(type, name)
        this.atk = atk
    }
}
class Armor extends Item{
    constructor(type, name, def){
        super(type, name)
        this.def = def
    }
}
// 아이템 목록
const Itemlist = [
    // equip
    new Weapon('weapon', 'Sword', 3),
    new Armor('armor', 'plate', 1),
    // etc
    new Item('etc', 'slimebubble'),
]        
// 몬스터 생성
class Monster extends Character{
    constructor(name, lv, hp, mp, atk, def, exp, item){
        super(name, lv, hp, mp, atk, def, exp)
        this.item = item
    }
    damaged(user){                          
        this.hp.count -= user.atk                
        createlog(`${this.name}은(는) ${user.atk}의 피해를 입었다. 남은 체력 ${this.hp.count}`)
        if(this.hp.count <= 0){
            createlog(`${this.name}을 해치웠다!`)
            this.hp.count = this.hp.max
            user.getExp(this)
            inbattle = false
        }
    }
}
// 몬스터 목록
const slime = new Monster('슬라임', 1, {max : 3, count : 3}, {max : 0, count : 0}, 1, 0, 5, 'slimebubble')

// 전투 개시
let inbattle = false
function battle(monster){
    if(!inbattle){
        createlog(`${monster.name}과 조우했습니다! 배틀을 개시합니다.`)
        inbattle = true
    }else{
        user.damaged(monster)
        monster.damaged(user)
    }
}
