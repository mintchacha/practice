

//삼항연산자
//조건 ? (참일때 작동) : (거짓일때 작동)
// const array = [1,2]
// let text = array.length === 0
//     ? '배열이 비어있습니다.'
//     : '배열이 비어있지 안습니다.'
// console.log(text);
// //삼항연산자 중첩사용(지양)
// const condition1 = false;
// const condition2 = false;
// const value = condition1
//  ? '와우'
//  : consdition2
//     ? 'blabla'
//     : 'foo'

//Truthy Falsy  참,거짓과 거의 비슷한 값
// 모두 true 로 반환
// console.log(!undefined);
// console.log(!null);
// console.log(!0);
// console.log(!'');
// console.log(!NaN);
// console.log(!false);
// // 모두 false 로 반환
// console.log(!3);
// console.log(!'hello');
// console.log(!['array']);
// console.log(![]);
// console.log(!{});
// // 지금 상태를 true나 false 로 변환해주는법
// const truthy = !!'';
// console.log(truthy);

//단축평가 논리 계산법
// console.log(true && 'hello'); //조건 앞이 true 일경우엔 뒤의 값을 먼저 반환함.
// console.log('hello' && 'bye');
// console.log(false && 'hello'); //조건 앞이 false 일땐 뒤에값을 보지않고 바로 종료
// console.log(false || 'hello'); //or 문은 true 인 값이있으면 그것을 반환
// console.log('bye' || 'hello'); //true 인 값이 앞에 있으면 그것을 반환함
// //예제(if 문 코드줄이기 팁)
// const namelessDog = {
//     name : '',
// };
// function getName(animal){
//     const name = animal && animal.name;
//     return name || '이름이 없습니다';
// }
// const name = getName(namelessDog);
// console.log(name);

//함수의 기본 파라미터
// function calculateCircleArea(r = 1 ,g = 2){   
//     return Math.PI * r * r
// }
// const area = calculateCircleArea();
// console.log(area);

//조건문 스마트하게 쓰기
// function isAnimal(text){ //리턴한 값이 불리언 값
//     const animals = ['고양이','개','거북이','너구리']
//     return animals.includes(text); //includes 는 배열안의 데이터들과 비교해서 불리언으로 변환해줌
// }
// const isAnimal = text => ['고양이','개','거북이','너구리'].includes(text);
// console.log(isAnimal('고양이'))

// function getSound(animal){
//     const sounds = {
//         개 : '멍멍',
//         고양이 : '야옹',
//         참새 : '짹짹',
//         비둘기 : '구구 구 구',
//     }
//     return sounds[animal] || '...?'
// }
// console.log(getSound('개'));

// function makeSound(animal){
//     const tasks = {
//         //세 문법 같은기능
//         개 : () => {
//             console.log('멍멍');
//         },
//         고양이(){
//             console.log('야옹');
//         },
//         비둘기 : function(){
//             console.log('구구 구 구');
//         }
//     }
//     if(!tasks[animal]){
//         console.log('...?')
//         return
//     }
//     console.log(tasks);
//     tasks['야옹;];
// }
// makeSound('개');
// makeSound('비둘기');
// makeSound('인간');

//비구조화 할당 함수나 변수 파라미터에 미리 값을지정해줘서 꺼내기
//단순한 구조에서 값을 가져오는법
// const array = [1];
// const [one,two = 2] = array;
// console.log(one);
// console.log(two);

//복잡한 구조에서 가져오는 법
const deepObject = {
    state  : {
        information : {
            name : 'test',
            languages : ['korean', 'english', 'chinese']
        }
    },
    value : 5
}
//밖으로 꺼내주는작업1
const {name, languages : [firstlang,secondlang]} = deepObject.state.information;
const {value} = deepObject;
//밖으로 꺼내주는작업2
// const {
//     state:{
//         information : {
//             name, languages : [firstlang,secondlang]
//         }
//     },
//     value
// } = deepObject;
//호출을 위해 준비하는 작업. 값이 이미 있다면 설정 안해줘도 된다.
const extracted = {
    name,
    firstlang, secondlang,
    value
}
console.log(extracted);