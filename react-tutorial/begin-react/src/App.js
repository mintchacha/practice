import React, { useRef,useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


//컴포넌트
function App() {  
  const [inputs,setInputs] = useState({
    username : '',
    email : ''
  })
  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users ,setUsers] = useState([
    {
        id : 1,
        username : 'chanho',
        email : 'cksgh824@naver.com'
    },
    {
        id : 2,
        username : 'sanghyeon',
        email : 'sanghyeon@naver.com'
    },
    {
        id : 3,
        username : 'test',
        email : 'test@test.com'
    }
]);

const nextId = useRef(4);

const onCreate = () => {
  const user = {
    id : nextId.current,
    username,
    email
  }
  setUsers([...users,user]);
  console.log(setUsers([...users,user]));
  setInputs({
    username : '',
    email : ''
  })
  nextId.current += 1;
}

  return (
    <>
    <CreateUser 
      username = {username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users = {users}/>    
    </>
  );
}

export default App;


//react의 DOM은 HTML이 아니고 JSX.
//import 컴포넌트 명 from '파일경로'; //js를 연결해 JSX를 불러옴
//컴포넌트 이름 시작은 무조건 대문자로

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

// import React, { useState } from 'react' 리액트의 동적인 함수 호출
// const [number, setNumber] = useState(0); //[현재값,설정할숫자,객체] = useState(기본값설정); 변수할당
// const onIncrease = () => {
//     setNumber(prevNumber => prevNumber + 1); //설정될 값 호출. 함수형으로 최적화 시키는것 권장
// }

//useRef 는 querySelector 같이react로 작동이안되고 DOM을직접 작동해야할때 쓰는 함수(useState와 다르게 리렌더링 되지않음.)
// const nameInput = useRef(); 변수로 객체 할당해주고 JSX태그 rel속성으로 링크
// 
// nameInput.current.focus();
//current 로 DOM을 불러오게한다.

//push, splite 는 리렌더링이 안됨. spread나 concat 사용해야 리렌더링이되어서 DOM 조작이필요할때 참고