import React, { memo, useState } from 'react';
import styled from "styled-components";
import FsLightbox from 'fslightbox-react';

import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';

const Button = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
`;


const FsLightboxEx = memo(() => {
    const [singleToggler, setSingleToggler] = useState(false);
    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    const [youtubeToggler, setYoutubeToggler] = useState(false);
    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1
    });


    return (
        <div>
            <h2>Single Gallery</h2>        
            <div>
                <Button onClick={e => setSingleToggler(!singleToggler)}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <FsLightbox toggler={singleToggler} sources={[img1]}/>
            </div>
            <h2>Multi Gallery</h2>
            <div>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>

                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>

                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>

                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <FsLightbox toggler={multiToggler.open} sources={[img1, img2, img3, img4, img5]} slide={multiToggler.index}/>
            </div>

            <h2>Youtube link</h2>
            <div>
                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
                    <img src='https://img.youtube.com/vi/RtPwBk0pqKE/hqdefault.jpg' width="150" alt="img1" />
                </Button>

                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 2})}>
                    <img src='https://img.youtube.com/vi/RtPwBk0pqKE/hqdefault.jpg' width="150" alt="img1" />
                </Button>

                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 3})}>
                    <img src='https://img.youtube.com/vi/RtPwBk0pqKE/hqdefault.jpg' width="150" alt="img1" />
                </Button>
                <FsLightbox toggler={youtubeMultiToggler.open} sources={[
                    'https://www.youtube.com/watch?v=RtPwBk0pqKE',
                    'https://www.youtube.com/watch?v=iiV9mtiI3KM',
                    'https://www.youtube.com/watch?v=k7LhdJPUTQ0'
                ]} />
            </div>
        </div>
    );
});

export default FsLightboxEx;