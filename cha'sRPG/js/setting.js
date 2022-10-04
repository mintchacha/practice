class Character{
    constructor(name, lv, hp, mp, atk, def, exp,  gold, item){
        this.name = name
        this.lv = lv
        this.hp = hp
        this.mp = mp
        this.atk = atk
        this.def = def
        this.exp = exp
        this.gold = gold
        this.item = item
    }
}
// 로그생성
function createlog(txt, color){
    const creattxt = document.createElement('p')
    creattxt.innerHTML = txt
    if(!color){color = '#Fff'}   
    creattxt.style.color = color         
    battlezone.appendChild(creattxt)
    battlezone.scrollTop = battlezone.scrollHeight;
}
// 유저 생성
// 레벨 업 포인트
const level = [5,15,30,60,90,180]
// 스탯창
const namebox = document.getElementById('name')
const lvbox = document.getElementById('lv')
const maxhpbox = document.getElementById('maxhp')
const hpbox = document.getElementById('hp')
const maxmpbox = document.getElementById('maxmp')
const mpbox = document.getElementById('mp')
const atkbox = document.getElementById('atk')
const defbox = document.getElementById('def')
const expbox = document.getElementById('exp')
const goldbox = document.getElementById('gold')
// 사냥터
const battlezone = document.querySelector('.battlezone')
// 설정
const setting = document.querySelector('.settingbox')
// 상점
const shop = document.querySelector('.shop')
// 인벤토리
const bag = document.querySelector('.bagbox')
for(let i = 1; i <= 35; i++){
    const creatitem = document.createElement('div')        
    bag.querySelector('.items').appendChild(creatitem)
}
const bag_items = document.querySelectorAll('.bagbox .items div')

class User extends Character{
    constructor(name, lv, hp, mp, atk, def, exp, gold, item){
        super(name, lv, hp, mp, atk, def, exp, gold, item)
    }
    // 스탯 DOM 출력
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
        goldbox.innerHTML = this.gold
    }
    // 공격받는 이벤트
    damaged(moster){               
        this.hp.count -= moster.atk
        user.quiry()
        createlog(`${this.name}은(는) ${moster.atk}의 피해를 입었다. 남은 체력 ${this.hp.count}`, '#f00')
        if(this.hp.count <= 0){
            alert('사망하셨습니다.')
            location.href = './';
        }
    }
    // 경험치획득
    getExp(getexp){
        this.exp += getexp 
        level.forEach((item)=>{
            if(this.exp >= item){
                level.shift()
                this.lv ++   
                this.hp.count = this.hp.max 
                createlog(`레벨업`, '#33dddf')
            }
            user.quiry()
        })
    }    
    // 아이템획득
    getitem(getitem){
        this.item.push(getitem)        
        bag_items[this.item.length - 1].style.background = `url(${getitem.img}) no-repeat center center /60% rgb(255, 241, 214)`
        bag_items[this.item.length - 1].style.cursor = 'pointer'
        bag_items[this.item.length - 1].addEventListener('mouseover', function(){
            this.classList.add('hover')
            const createinfobox = document.createElement('div')
            createinfobox.innerHTML = `<h4>${getitem.name}</h4>
                                       <p>${getitem.info}</p>`
            createinfobox.classList.add('iteminfo')
            this.appendChild(createinfobox)
        })
        bag_items[this.item.length - 1].addEventListener('mouseout', function(){
            this.classList.remove('hover')
            this.querySelector('div.iteminfo').remove()
        })        
        bag_items[this.item.length - 1].addEventListener('click',() => {
            this.useitem(getitem)
        })
    }
    useitem(useitem){
        switch(useitem.type){
            case 'consumption' : 
                this.hp.count + useitem.cure > this.hp.max ? this.hp.count = this.hp.max : this.hp.count + useitem.cure
                console.log(this.item)
                bag_items[this.item.length - 1]
                break;
        }
        this.quiry()
    }
}
// 아이템 생성
class Item {
    constructor(type, name, gold, img, info){
        this.type = type
        this.name = name
        this.gold = gold
        this.img = img
        this.info = info
    }
}
// 무기생성
class Weapon extends Item{
    constructor(type, name, gold, img, info, atk){
        super(type, name, gold, img, info)
        this.atk = atk
    }
}
// 방어구생성
class Armor extends Item{
    constructor(type, name, gold, img, info, def){
        super(type, name, gold, img, info)
        this.def = def
    }
}
// 회복아이템 생성
class consumption extends Item{
    constructor(type, name, gold, img, info, cure){
        super(type, name, gold, img, info)
        this.cure = cure
    }
}
// 아이템 목록
// 무기
const woodsword = new Weapon('weapon', '목검', 5, './images/items/woodsword.png', '', 2)
// 방어구
const plate = new Armor('armor', '가죽 갑옷', 5, './images/items/plate.png', '', 1)
// 소비
const pill = new consumption('consumption', '알약', 5, './images/items/Exitem.png', '체력을 5 회복시켜주는 약이다.', 5)
// 기타
const slimebubble = new Item('etc', '슬라임 방울', 0, './images/items/slimebubble.png', '',)

// 몬스터 생성
class Monster extends Character{
    constructor(name, lv, hp, mp, atk, def, exp, gold, item){
        super(name, lv, hp, mp, atk, def, exp, gold, item)        
    }
    damaged(user){                          
        this.hp.count -= user.atk                
        console.log(user)
        createlog(`${this.name}은(는) ${user.atk}의 피해를 입었다. 남은 체력 ${this.hp.count}`)
        if(this.hp.count <= 0){
            createlog(`${this.name}을 해치웠다!`)
            user.gold += this.gold
            user.getitem(this.item)
            user.getExp(this.exp)
            this.hp.count = this.hp.max
        }
    }
}
// 몬스터 목록
// 초보자 숲
const slime = new Monster(
    // 이름
    '슬라임',
    // 레벨
    1,
    // 체력
    {max : 3, count : 3},
    // 마나
    {max : 0, count : 0},
    // 공격력
    1,
    // 방어력
    0,
    // 경험치
    5,
    // 골드
    1,
    // 드랍템
    pill
)
const wolf = new Monster('늑대', 2, {max : 5, count : 5}, {max : 0, count : 0}, 1, 0, 7, 2,'늑대 이빨')
const bear = new Monster('곰', 2, {max : 5, count : 5}, {max : 0, count : 0}, 1, 0, 7, 2,'늑대 이빨')
// 중급자 평야
const ogre = new Monster('오우거')
const skull = new Monster('스켈레톤')
const deathknight = new Monster('사령기사')
// 상급 던전 
const hatchling = new Monster('새끼드래곤')
const dragon = new Monster('성체드래곤')
const devil = new Monster('악마')
let random_spawn = []
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
