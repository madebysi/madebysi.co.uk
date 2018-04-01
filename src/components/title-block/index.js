import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    maxGridWidth,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: ${maxGridWidth}px;
    margin: 0 auto;
`;

const Inner = styled.div`
    ${'' /* border: 10px dashed red; */}
    padding: 0 ${standardMargin}%;
    width: 100%;

    ${media.md`
        padding: 0 ${standardMarginMd}%;
    `}
`;

const Title = styled.h1`
    color: ${colors.black};
    ${fontRegular};
    font-size: 30px;
    line-height: 1;
    margin: 0 0 28px;

    ${media.md`
        font-size: 48px;
    `}
`;

const SubTitle = styled.h3`
    color: ${colors.blue};
    ${fontRegular};
    font-size: 18px;
    line-height: 1;
    margin: 0 0 46px;
    opacity: 0.5;

    ${media.md`
        font-size: 22px;
        margin: 0 0 86px;
    `}
`;

export default ({
    title,
    subTitle
}) => (
    <Wrapper>
        <Inner>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Inner>
    </Wrapper>
);
