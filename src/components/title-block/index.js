import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.article`
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
    font-size: 48px;
    line-height: 1;
    margin: 0 0 28px;

    ${media.md`
        font-size: 48px;
    `}
`;

const SubTitle = styled.h3`
    color: ${colors.blue};
    ${fontRegular};
    font-size: 22px;
    line-height: 1;
    margin: 0 0 86px;
    opacity: 0.5;

    ${media.md`
        font-size: 22px;
    `}
`;

export default ({
    title,
    subTitle
}) => (
    <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
);
