import React from 'react';
import Counter from './Counter';


//컴포넌트
function App() {  
  return (
    <Counter /> 
  )
}

export default App;


//react의 DOM은 HTML이 아니고 JSX.
//import 컴포넌트 명 from '파일경로'; //js를 연결해 JSX를 불러옴

// 프레그먼트 <></> 두개이상태그는 하나의 태그로 감싸야 되는데 이를 해결하기위해 사용.
//<input> 이나 <br> 같은 독립 태그는 <input /> 셀프클로징을 해줘야 오류가 안남.
//{} 로 자바스크립트의 값을 태그안에 삽입 가능\
//class 대신 className 사용
//인라인 스타일 주기위해 만드는 객체 그냥 주면 작동안됨. 객체 기본 단위는 px 단위 설정시 문자열로

//props 는 properties 의 줄임으로 특정 값을 전달시 사용 구조분해해서 사용하면 편함 <Hello name='react' color='red'/> name 이나 color 의 값
//children 은 자식 태그들
//컴포넌트 명.defaultProps = {} 하면 기본값 설정가능

//조건부 서식 isSpecial={불리언} isSpecial만 선언하면 기본값은 true 임

//자바스크립트완달리 JSX 에서는 이벤트시 onClick같은 이벤트를 대문자로 설정해줘야함. 값을 ()로 호출하면 안되고 함수이름만 설정. 호출시 사이트 시작하자마자 함수작동




// JSX안의 property값은 전부 자바스크립트로만 세팅이 되는듯..?