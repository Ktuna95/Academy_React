import React from 'react';

const MyRef = () => {
    const myDname = React.useRef();
    const myLoc = React.useRef();
    const myResult = React.useRef();

    return (
        <div>
            <h2>MyRef</h2>
            <div>
                <label htmlFor="dname">학과명</label>
                <input type="text" ref={myDname} id="dname" name="dname" />                
            </div>
            <div>
                <label htmlFor="dname">학과위치</label>
                <input type="text" ref={myLoc} id="loc" />
            </div>
            <h3>
                입력값: <span ref={myResult}></span>
            </h3>
            <button onClick={e => {
                console.log(myDname);
                console.log(myLoc);

                const dname = myDname.current.value;
                const loc = myLoc.current.value;

                myResult.current.innerHTML = dname + ", " + loc;
            }}>클릭</button>
        </div>
    );
};

export default MyRef;