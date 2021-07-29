import React from 'react';
import imgname from './img/img.png';

function Header(){
    const text = "React"
    const ulstyle = {
        padding:0
    }
    const listyle = {
        backgroundColor:'black',
        color:'aqua',
        fontSize:21,
        fontWeight:'bold',
        letterSpacing:3,
        padding:'1rem',
        marginBottom:5,
        listStyle:'none'        
    }
    return (
        <header>
            <h1 className="gray-box">로고</h1>
            <ul style={ulstyle}>
                <li style={listyle}>
                    {text}
                </li>
            </ul>
                <img src={imgname} alt="이미지 테스트"/>
        </header>
    )
}

export default Header;