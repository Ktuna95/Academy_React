import React, { memo, useRef } from 'react';
import styled from "styled-components";

import img01 from '../assets/img/img01.jpg';
import img02 from '../assets/img/img02.jpg';
import img03 from '../assets/img/img03.jpg';
import img04 from '../assets/img/img04.jpg';
import img05 from '../assets/img/img05.jpg';

/**썸네일 리스트에 대한 StyledComponent */
const ThumbList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640px;
    margin: auto;

    &:after {
        float: none;
        clear: bath;
        content: '';
        display: block;        
    }

    li{
        width: 20%;
        float: left;

        a{
            display: block;
            margin: 10px;

            img {
                width: 100%;
            }
        }
    }
`;
/**이미지 뷰어 영역에 대한 StlyedCOmponent */
const Viewer = styled.div`
    width: 620px;
    margin: auto;
    padding: 0 10px;

    img {
        width: 100%;
    }
`;

const ImageEx = memo(() => {
    // 이미지 뷰어에 대한 참조변수
    const viewerImg = useRef();

    // 썸네일 이미지에 대한 클릭 이벤트 핸들러
    const onThumbnailClick = (e) => {
        e.preventDefault();

        // currentTarget은 이벤트 리스너를 가진 요소인 <a>를 의미
        const current = e.currentTarget;

        // <a>태그에 부여된 href와 title 속성 가져오기
        const href = current.getAttribute('href');
        const title = current.getAttribute('title');
        console.log('href=${href}, title=${title}');

        // 가져온 속성값을 이미지 뷰어에 부여한다.
        viewerImg.current.src = href;
        viewerImg.current.alt = title;
    };
    
    //썸네일 표시할 이미지와 제목에 대한 JSON배열
    const imgList=[
        {img: img01, title: '테스트 이미지 1'},
        {img: img02, title: '테스트 이미지 2'},
        {img: img03, title: '테스트 이미지 3'},
        {img: img04, title: '테스트 이미지 4'},
        {img: img05, title: '테스트 이미지 5'}
    ]

    return (
        <div>
            <h2>ImageEx</h2>
            {/* 썸네일 리스트 표시하기 */}
            <ThumbList>
                {imgList.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={v.img} title={v.title} onClick={onThumbnailClick}>
                                <img src={v.img} alt={v.title} />
                            </a>
                        </li>
                    )
                })}
            </ThumbList>
            {/*이미지 뷰어 */}
            <Viewer>
                <img src={imgList[0].img} ref={viewerImg} alt={imgList[0].title}/>
            </Viewer>
        </div>
    );
});

export default ImageEx;