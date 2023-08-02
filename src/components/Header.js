import React from "react";
import styled from 'styled-components';
import { useState } from "react";

const HeaderBlock = styled.div`
    h1 {
        margin : 0;
        color : grey;
    }

    .day {
        margin-top : 4px;
        color : lightgrey;
    }

`
function Header(){

    const today = new Date(); // 오늘 날짜



    // toLocaleDateString 문자로 'ko-KR' 한국 
    const dateString = today.toLocaleDateString('ko-KR',{
        // 날짜 값을 받을 때는 Int를 사용하지 않고 numeric long numeric을 사용한다.
        //
        year:'numeric',
        month:'long',
        day:'numeric'
    });
    const dayName = today.toLocaleString('ko-KR',{weekday:'long'});
    const todos = useState();
    const undoneTasks = todos.filter(todo => !todo.done);
    return(
    <HeaderBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div >할 일{undoneTasks.length}</div>
    </HeaderBlock>
    );


}export default Header;