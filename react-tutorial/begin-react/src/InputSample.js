import React, {useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name,nickname} = inputs;
    const onChange = (e) => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
        //객체상태를 컨트롤하려면 spread로 불러와줘서 새로운 상태로 덮어씌워줘야함. (불변성을 지킨다.)
        //name을 대괄호로 감싸주지않으면 문자열로 처리되어서 name 에 해당하는 부분만 수정이됨.
    }
    //e.target 은 현재 가리키고 있는 DOM
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )   
}

export default InputSample;