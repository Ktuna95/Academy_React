import React from 'react';
import sample from '../assets/img/sample.png';

const InlineCss = () => {
    const myStyle = {
        background: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    }
    return (
        <div>
            <h2>InlineCss</h2>
            <h3>변수로 정의된 CSS 참조하기</h3>
            {/*(1-2) JSON객체를 style 속성에 적용*/ }
            <div style={myStyle}>Hello React Css (1)</div>

            <h3>직접 CSS 코딩하기</h3>
            {/* (2) CSS 직접 코딩 */}
            <div style={{
                backgroundColor: '#ff0',
                fontSize: '20px',
                color: '#00f',
                fontWeight: 'bold',
                padding: '10px 25px',
                marginBottom: '10px'
            }}>
                Hello React Css (2)
            </div>
            <h3>이미지 참조하기</h3>
            {/* 
                (3-2) 이미지 사용시 alt 속성을 지정 안하면 경고 발생항 
            */}
            <img src={sample} width='240' height='240' alt='샘플이미지' />
            {/* 
                (3-3) public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함
                (public 폴더 하위에 임의의 폴더 생성 가능)
                
            */}
            <img src='/logo192.png' width='240' height='240' alt='react' />
        </div>
    );
};

export default InlineCss;