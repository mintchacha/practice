//javascript 비동기처리
//동기적 처리 : 1작업이 끝날때까지 2작업이 시작하지않음
//비동기적 처리 : 1작업과 2작업 동시에 처리 자바스크립트 기본 특성임.
//비동기 : setTimeout(시간0으로해도 브라우저 최소값은 4ms), ajax
// console.log('작업 시작');
// function work (callback){ // 이 함수가 끝난후 실행시키고 싶은게 있다면 callback 파라미터로 받아와서
//     setTimeout(()=>{
//         const start = Date.now();
//         for(let i = 0; i < 10000000; i++){}
//         const end = Date.now();
//         callback(end - start); //리턴해줄 값을 받아와서
//     },0)   9
// }
// work((call) => { //함수호출인자에 함수를 호출해서 callback 파라미터를 받아와서 사용
//     console.log(`${call} 입니다.`);
// });
// console.log('다음작업');

//promise 콜백만의 콜백안의 콜백들(콜백지옥)을 처리하가위해 사용한다.
// const myPromise = new Promise((resolve,reject) => { //resolve : 성공, reject : 실패 (callback)처럼 사용하는용도.
//     setTimeout(()=>{
//         // resolve(resolve); 성공
//         reject(new Error());
//     },1000)
// });
// myPromise.then(result => { //then은 promise 가 끝나고 실행될 함수
//     console.log('result');
// }).catch(e => { //catch는 reject로 에러발생시 호출될 함수
//     console.error(e);
// });
// function IncreaseAndPrint(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const value = n + 1;
//             if(value === 5){
//                 const error = new Error();
//                 error.name = 'ValueIsFIveError';
//                 reject(error);
//                 return
//             }
//             console.log(value);
//             resolve(value);
//         },1000)
//     })
// }

// IncreaseAndPrint(0).then(IncreaseAndPrint)
// .then(IncreaseAndPrint)
// .then(IncreaseAndPrint)
// .then(IncreaseAndPrint)
// .catch(e => {
//     console.error(e);
// });

//async, await  //함수앞에 async , promise 앞엔 await 사용
// function sleep (ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// };
// async function makeError(){
//     await sleep(1000);
//     const error = new Error();
//     throw error; //에러 발생시킬땐 throw
// };
// async function process(){
//     try{ //에로 호출할땐 try catch 조합으로.
//         await makeError();
//     } catch(e){
//         console.error(e);
//     }
// };
// process()

//promise all, promise race
// function sleep (ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// };
// const getDog = async () => {
//     await sleep(1000);
//     return '멍멍이';
// };
// const getRabbit = async () => {
//     await sleep(500);
//     return '토끼';
// };
// const getTurtle = async () => {
//     await sleep(3000);
//     return '거북이';
// };
// async function process(){
//     const [dog,rabbit,tuttle] = await Promise.all([getDog(),getRabbit(),getTurtle()]); 
//     //all은 전부같이 시작해서 반환(하나라도 에러나면 전체에러) race는 가장빠른것하나만 반환함(가장빠른것이 에러날때만 에러)
//     console.log(dog);
//     console.log(rabbit);
//     console.log(dog);
// };
// process()


//연습
// console.log('작업 시작');
// function work (callback){ // 이 함수가 끝난후 실행시키고 싶은게 있다면 callback 파라미터로 받아와서
//     setTimeout(()=>{
//         const start = Date.now();
//         for(let i = 0; i < 10000000; i++){}
//         const end = Date.now();
//         callback(end - start); //리턴해줄 값을 받아와서
//     },100);
// }
// work(call => { //함수호출인자에 함수를 호출해서 callback 파라미터를 받아와서 사용
//     console.log(`${call} 입니다.`);
//     work(call => { //함수호출인자에 함수를 호출해서 callback 파라미터를 받아와서 사용        
//         console.log('다음작업');
//     });
// });

// function increase(n){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if(value > 4){                
//                 const error = new Error;
//                 error.name = '경고임';
//                 reject(error);
//                 // return;
//             }
//             console.log(value);
//             resolve(value);
//         },500)
//     });
// }
// console.log(increase);
// increase(0)
// .then(increase)
// .then(increase)
// .then(increase)

//헷갈리는 부분 정리 : a함수선언 후 파라미터로 콜백함수를 설정하면 a함수 호출시 인자로 새로운 이름없는 b함수를 설정하고 b함수 파라미터로 a함수내부의 콜백함수값을 받는다.
// 이때 동기작업은 콜백이 선언된 함수 안에서만 임.
// 작업시작과 다음 작업로그도 비동기에서 동기로 바꾸려면 a함수 호출 내부에 다시 a함수를 호출해서 설정을 해줘야함. 이게 반복된 것을 콜백지옥이라고 함.
// ?시간상관없으면 한번호출할때 순서대로 다 나와서 상관없나?

//promise 선언이후 settimeout 안의 reject()나 resolve()는 callback이랑 사용 방법이 같다. then으로 콜백을 받아오는 차이임.
//하지만 callback과 다르게 콜백지옥이 일어나지 않고 then 만 연속적으로 선언해주면 알아서 순서대로 동기적 작업이 진행된다.

//then에 함수명인 increase만 들어간 이유는 어짜피 then 안에는 함수가 들어가고 increase에는 n이라는 파라미터가 이미 지정되어 있으므로 처음만 파라미터를 지정해주면 resolve(value);로 받아오는 값은 같다.
// return increase(n) 와 increase 는 어짜피 같은 promise와 파라미터를 return 해주기때문에 짮은 코드쪽이 낫다.
// return increase(n) = n 값이들어간 promise 를 return;
// increase = increase(n) 이라는 함수 자체. increase(n)라는 함수가 return하고있는것은 n 값이들어간 promise.

///async 로 선언된 함수는 promise 로 반환되고 동기적 처리가 된다.
//await 으로 프로미스 함수내용을 호출, throw 로 reject역할 대신 throw 사용법은 .then대신 try {throw선언되어있는 함수await으로 호출}.catch{에러명 띄움}로.