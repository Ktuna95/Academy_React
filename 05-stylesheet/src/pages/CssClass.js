import React from 'react';
import myStyle from "./css/mystyle.css";

const CssClass = () => {
    return (
        <div>
            <h2>CssClass</h2>

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyle.myCssBox}/>

            <h3>독립 클래스</h3>
            <div className="myBorderBox"/>

            <h3> 다중 클래스 적용 (1) - 역따옴표 사용</h3>
            <div className={`${myStyle['my-size']} ${myStyle['my-bg']}`}/>

        </div>
    );
};

export default CssClass;