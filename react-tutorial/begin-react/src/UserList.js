import React, { useState } from 'react';

function User({ user,onRemove }){
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b><span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}
//props 받는 컴포넌트 새로만들어서 태그 요약.

function UserList({ users, onRemove }){    
    return (
        <div>
            {
                users.map(
                    (user,index) => (
                        <User
                            user = {user} 
                            key = {user.id} 
                            onRemove={onRemove}
                        />
                    )
                    //id 가없을시 파라미터로 index 가져와서 사용, 하지만 권장하지않는다.
                    //key값은 처리순서에 연관이 있음.(배열 효율적 렌더링)
                )
            }
        </div>
    )
}

export default UserList;