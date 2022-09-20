const user = new User('유저', 1, {max : 10, count : 10}, {max : 10, count : 10}, 1, 0, 0, [])
user.quiry()

const battle_btn = document.getElementById('battle')
battle_btn.onclick = () => {
    battle(slime)        
}

const bag_btn = document.getElementById('bagopen')
const bag = document.querySelector('.bagbox')
bag_btn.onclick = () => {
  bag.classList.toggle('open')
}