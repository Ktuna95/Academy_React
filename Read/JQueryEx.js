import React, { memo, useEffect } from 'react';

// yarn add jquery 
import $ from "jquery";

const JQueryEx = memo(() => {

    useEffect(() => {
        // jQuery 코드 위치.
        $(".target").click((e) => {      //마우스 누를떼
            console.log('누름');
            $("#targetDiv").slideToggle();
        });
    }, []);

    return (
        <div>
            <h2>jQuery Ex</h2>
            <button className="target">버튼</button>

            <div id="targetDiv" style={{
                width: '480px',
                height: '320px',
                backgroundColor: '#f60'
            }}>Hello World</div>
        </div>
    );
});

export default JQueryEx;