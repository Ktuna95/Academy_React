import React from 'react';
import MyPropsSub from '../components/MyPropsSub';

const Myprops = () => {
    return (
        <div>
            {/*Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다.*/}
            <h2>MyProps</h2>
            {/*컴포넌트에게 props 전달하기 - 문자열 같은 따옴표로 감싼다. 그 외의 형식은 '{}'로 감싼다. */}
            <MyPropsSub/>
            <MyPropsSub name='민호' age='19'/>
            <MyPropsSub name='수영' age={21}/>            
        </div>
    );
};

export default Myprops;