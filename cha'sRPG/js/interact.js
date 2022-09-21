// 유저정보 출력
const user = new User(
  // 이름
  '유저',
  // 레벨
  1,
  // 체력
  {max : 10, count : 10},
  // 마나
  {max : 10, count : 10},
  // 공격력
  1,
  // 방어력
  0,
  // 경험치
  0,
  // 골드  
  0,
  // 아이템
  []
)
user.quiry()

// 배틀 버튼
const battle_btn = document.getElementById('battle')
battle_btn.onclick = () => {
    battle(slime)        
}
const logdelete_btn = document.getElementById('logdelete')
logdelete_btn.onclick = () => {
  battlezone.querySelectorAll('p').forEach((item)=>{
    item.remove()
  })
}

// 가방 열기버튼
const bag_btn = document.getElementById('bagopen')
bag_btn.onclick = () => {
  bag.classList.toggle('open')
}

// 설정 열기버튼
const setting_btn = document.getElementById('settingopen')
setting_btn.onclick = () => {
  setting.classList.toggle('open')
}

// 상점이롱 버튼
const goshop = document.getElementById('goshop')
goshop.onclick = () => {
  scrollTo(
    {
      top : shop.offsetTop,
      left:0,
      behavior : 'smooth'
    }    
  )
  console.log(shop.scrollHeight)
}