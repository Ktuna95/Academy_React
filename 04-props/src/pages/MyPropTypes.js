import React from 'react';
import MyPropTypesSub from '../components/MyPropTypesSub';
import Meta from '../components/Meta';

const MyPropTypes = () => {
    return (
        <div>
            <Meta title="MyPropTypes.js" description="여기는 MyPropTypes.js 파일 입니다." url={window.location.href}/>            
            <h2>MyPropTypes</h2>
            {/* 문자열이 아닌 형식은 {}로 감싸야한다. */}
            <MyPropTypesSub name='민호' age={19} hobby="사진찍기"/>
            <MyPropTypesSub name='수영' age='스물한살' hobby="영화보기"/>
            <MyPropTypesSub name='철민' age={22}/>
        </div>
    );
};

export default MyPropTypes;