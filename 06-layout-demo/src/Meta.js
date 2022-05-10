import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
                {/* <meta property='og:image' content={props.image} /> */}}
                
                {/* 웹 폰트 적용을 위한 외부 리소스 참조 */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet" />
            </Helmet>
        </HelmetProvider>
    );
};
/*
    @type {{keywords: string, author: string, description: string, title: string, url: string}}
*/
Meta.defaultProps = {
    title: 'React Layout Demo',
    description: 'React.js로 구현한 레이아웃 데모 페이지 입니다.',
    keywords: 'React, layout, demo',
    author: '호쌤',
    // image: '기본이미지변수적용',
    url: window.location.href
};
export default Meta;