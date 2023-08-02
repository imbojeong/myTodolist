import React from "react";
import { styled } from "styled-components";

const TempletBlock = styled.div`
    //화면 크기
    width:720px;
    height:820px;

    position: relative; /*추후 박스 하단에 추가 버튼을 위치 시키기 위한 설정*/
    background: white;

    margin : 0 auto; /* 페이지 중앙에 나타나도록 설정 */
`;

function Template({children}){
    return<TempletBlock>{children}상속받을 값</TempletBlock>;
}

export default Template;