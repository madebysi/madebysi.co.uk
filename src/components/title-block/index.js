import React from 'react';
import styled from 'styled-components';
import {
    colors,
    // columns,
    fontAlt,
    // maxGridWidth,
    media,
    standardMargin,
    standardMarginMd,
    standardMarginTop
} from '../../styles';
import HeroMedia from './hero-media';

const Wrapper = styled.div`
    background-color: ${({dark}) => dark ? colors.greyLight : colors.black};
    position: relative;
    width: 100%;
    ${'' /* max-width: ${maxGridWidth}px; */}
    ${'' /* margin: 0 auto; */}

    ${'' /* height: 150vw; */}
    height: 484px;

    ${media.sm`
        height: auto;
    `}
`;

const Inner = styled.div`
    ${'' /* border: 10px dashed red; */}
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 ${standardMargin}%;
    margin-top: ${standardMarginTop}px;

    ${media.sm`
        top: 50%;
        transform: translateY(-50%);
        margin-top: 0;
    `}

    ${media.md`
        padding: 0 ${standardMarginMd}%;
    `}
`;

const Title = styled.h1`
    color: ${({dark}) => dark ? colors.black : colors.white};
    ${fontAlt};
    font-size: 30px;
    line-height: 1.29;
    margin: 0 0 28px;

    ${media.sm`
        font-size: 66px;
    `}
`;

const SubTitle = styled.h3`
    color: ${({dark}) => dark ? colors.black : colors.white};
    ${fontAlt};
    font-size: 18px;
    line-height: 1;
    ${'' /* margin: 0 0 46px; */}
    ${'' /* opacity: 0.5; */}

    ${media.sm`
        font-size: 18px;
        // margin: 0 0 86px;
    `}
`;

export default ({
    title,
    subTitle,
    dark,
    heroMedia: {file}
}) => (
    <Wrapper dark={dark}>
        <HeroMedia file={file}/>
        <Inner>
            <Title dark={dark} dangerouslySetInnerHTML={{
                __html: title
            }}/>
            <SubTitle dark={dark}>{subTitle}</SubTitle>
        </Inner>
    </Wrapper>
);
