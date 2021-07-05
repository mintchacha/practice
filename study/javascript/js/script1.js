//Javascript 입문

//화살표 함수 let const 먼저 와야함 !!this 를 인지하지는 못함!!
// const add = (a, b) => a + b;

// const sum = add(1,2);
// console.log(sum);

// const hello = (name) => {
//     console.log(`Hello ${name}!`);
// }
// hello('chango');

// const dog = {
//     name : '멍멍이',
//     sound: '멍멍!',
//     say(){
//         console.log(this.sound);
//     }
// }
// const cat = {
//     name : '야옹이',
//     sound: '야옹!',
// }
// 비구조화 할당
// const {name, sound} = dog;
// console.log(name);
// const flag = ({name, sound}) =>{    
//     return `${name} 는 ${sound}`;
// }
// console.log(flag(dog));

// cat.say = dog.say; cat에 say 함수를추가함
// 변수/상수에 dog.say 를 할달하면 this 참조값이 바뀌어서 에러

//getter 함수 setter 함수
// const numbers = {
//     a:1,
//     b:2,
//     get sum(){
//         console.log('sum 함수가 실행됩니다!');
//         return this.a + this.b;
//     }
// }
// console.log(numbers.sum);

// const numbers = {
//     _a : 1,
//     _b : 2,
//     sum : 3,
//     calculate(){
//         console.log('caculate');
//         this.sum = this._a + this._b;
//     },
//     get a(){
//         return this._a;
//     },
//     get b(){
//         return this._b;
//     },
//     set a (value){
//         this._a  =+ value;
//         this.calculate();
//     },
//     set b (value){
//         this._b  = value;
//         this.calculate();
//     },
// };
// console.log(numbers.sum);
// numbers.a = 5;
// console.log(numbers.sum);

//while 비권장
// let i = 0;
// let isFun = false;
// while(!isFun){   
//     console.log(i);
//     i++;
//     if(i === 30){
//         isFun = true;
//     }    
// }

// const numbers = [10, 20 ,30 ,40 ,50];
// for (let number of numbers) {
//     console.log(number);
// };

// const doggy = {
//     name : '멍멍이',
//     sound : '멍멍',
//     age : '2'
// };
// //객체(Object)를 배열로 조사하는 방법들
// // console.log(Object.entries(doggy));  배열과 length로 리턴해줌
// // console.log(Object.keys(doggy));     객체의 key를 배열로 리턴해줌
// // console.log(Object.values(doggy));   객체의 value를 배열로 리턴해줌
// // 반복문으로 응용
// for(let key in doggy){    
//     console.log(`${key} : ${doggy[key]}`);
//     //${doggy[key]}여기서 변수 key는 for 문에서 선언된 변수로 doggy객체의 수만큼, doggy의 key로 반복을 하는데 !!문자열!!로 받아온다.
//     //doggy[key]는 doggy.key 와 다르게 key부분을 문자로 적어야 정상적으로 리턴해주는데 이 반복문에서는 이미 key로 지정된 변수가 문자열로 리턴되었기 때문에 문자열을 만들어줄 필요가없다.
//     //결론적으로 평상시에는 doggy.key === doggy['key'] 이고 for in 반복문안의 ${doggy[key]} 는 ${doggy['key']}이다.
// };

// const array = [1,2,3,4,5,6,7,8];
// const suare = n => n * n;
// const squered = array.map(suare); //map 괄호안의 조건을 배열전체에 적용해주는 함수 map의 파라미터는 각 요소들을 가리킴
// array.forEach(n => {
//     suared.push(n * n)
// })
// const items = [
//     {
//         id : 1,
//         text : '자바스크립트 입문',
//         done : true
//     },
//     {
//         id : 2,
//         text : '함수 배우기',
//         done : true
//     },
//     {
//         id : 3,
//         text : '객체와 배열 배우기',
//         done : true
//     },
//     {
//         id : 4,
//         text : '배열 내장함수 배우기',
//         done : false
//     }
// ]
// const texts = items.map(item => item.text)

// const superheroes = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지'];
// const index = superheroes.indexOf('토르');//배열의 몇번째인지 찾아주는 함수

// const index = items.findIndex(items => items.id === 3);//특정조건에 일치하는 것을 찾아주는 함수 find는 객체를 찾아주고 findindex는 몇번째 객체인지 찾아줌

// const tasksNotDone = items.filter(items => !items.done)//filter 해당하는 조건의 객체를 조사함 map,find 과 동일한 작동방식

// const numbers = [10,20,30,40];
// const index = numbers.indexOf(30);
// numbers.splice(index,1); //index 상수부터 시작해서 1인덱스까지 뺏아온다.기존배열 영향 o
// const sliced = numbers.slice(0,2);//0인덱스부터 2인덱스이전까지 가져옴 기존배열 영향 x
// const value = numbers.shift('20');//배열안의 맨앞의 요소를 하나씩 빼서 가져옴 배열 영향 o
// const value = numbers.pop(); //shift 와 같지만 끝의 요소를 하나씩. push로 넣은 값을 가져오기좋음
// numbers.unshift(5); // 배열의 맨앞에 요소를 추가

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const concated = arr1.concat(arr2);//배열 결합하기 기존배열 영향 x
// const array = [1,2,3,4,5];
// console.log(array.join("/"));//배열을 문자열로 바꿔준다. join의 파라미터는 세퍼레이트로 배열요소사이의 공간형태를 정해줄수있다.

//배열의 평균 값을 내는 방법
// const numbers = [1,2,3,4,5];
// const avg = numbers.reduce((accumulator, current, index, array) => {
//     if(index === array.length -1){
//         return (accumulator + current) / array.length
//     };
//     return accumulator + current;
// }, 0) //reduce의 accumulator누적된 값) current(각 원소들 처음부터), 0(초기값), ,index는 할당된 배열 몇번째인지, array 배열전부

// const alphabets = ['a', 'a', 'a','b','c','c','d','e'];
// const counts = alphabets.reduce((acc,current) =>{
//     if(acc[current]){
//         acc[current] += 1;
//     }else{
//         acc[current] = 1;
//     }
//     return acc;
// }, {});
// console.log(counts);

//프로토타입
//new 함수명() 은 기존함수를 가져와서 쓰는것이고
//new 함수를 부여한 곳에 프로토타입을선언해서 동일한 함수전부에 객체를 추가해줄수있다.
// function Animal(type,name,sound){
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
// };
// Animal.prototype.say = function(){
//     console.log(this.sound);
// }
// function Dog(name,sound){
//     Animal.call(this,'개',name,sound); //call로 기존의 객체생성자 옵션을 참조함. 맨처음 파라미터는 this로 call한 객체생성자를 참조해야함
// }
// function Cat(name ,sound){
//     Animal.call(this,'고양이',name,sound);
// }
// Dog.prototype = Animal.prototype;
// Cat.prototype = Animal.prototype;

// // const dog = new Animal('개','멍멍이','멍멍');
// // const cat =  new Animal('고양이','야옹이','야옹');
// const dog = new Dog('멍멍이','멍멍');
// const cat =  new Cat('야옹이','야옹');
// dog.say();
// cat.say();

//es6클래스
// class Animal{
//     constructor(type, name, sound){
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//     }
//     say(){
//         console.log(this.sound);
//     }
// }
// class Dog extends Animal { //estends = 특정 클래스를 상속받는다
//     constructor(name, sound){//호출할때 파라미터로 받을값들임
//         super('개',name, sound);//상속받은 클래스를 호출
//     }
// }
// class Cat extends Animal{
//     constructor(name, sound){
//         super('고양이',name, sound)
//     }
// }

// const dog = new Dog('멍멍이','멍멍');
// const cat = new Cat('고양이','야옹');

// dog.say();
// cat.say();

// class Food{
//     constructor(name){
//         this.name = name;
//         this.brands = [];        
//     }
//     addBrand(brand){
//         this.brands.push(brand);
//     }
//     print(){
//         console.log(`${this.name}을 파는 음식점들:`)
//         console.log(this.brands.join(', '));
//     }
// }

// const pizza = new Food('피자');
// pizza.addBrand('피자헛');
// pizza.addBrand('도미노 피자');

// const chicken = new Food('치킨');
// chicken.addBrand('굽네치킨');
// chicken.addBrand('BBQ');

// pizza.print();
// chicken.print();

//연습
//카테고리 생성
// function Game(type,name,user,tier){
//     this.type = type;
//     this.name = name;
//     this.user = user;
//     this.tier = tier;
// }
// Game.prototype.rank = function(){
//     console.log(`${this.user}의 티어는 ${this.tier}입니다.`);
// }

// //게임별 카테고리 분리
// function Valorant(tier,user){
//     Game.call(this,'FPS','발로란트',user,tier);    
// }
// Valorant.prototype = Game.prototype;

// //유저 정보 생성
// const chanho = new Valorant('골드','찬호');

// //찬호의 랭크 조회
// chanho.rank();

//입문 끝
