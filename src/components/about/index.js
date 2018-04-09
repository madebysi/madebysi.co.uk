import React from 'react';
import styled from 'styled-components';
import {
    colors,
    columns,
    fontRegular,
    LinkHoverIntroReg,
    media,
    standardMargin,
    standardMarginMd,
    standardMarginTop
} from '../../styles';


const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Bg = styled.div`
    background-color: ${colors.black};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Inner = styled.div`
    padding: 0 ${standardMargin}%;
    margin-top: ${standardMarginTop}px;
    width: 100%;
    position: relative;
    z-index: 1;

    ${media.sm`
        margin-top: ${200}px;
    `}

    ${media.md`
        padding: 0;
        margin: 250px ${standardMarginMd}%;
        width: ${columns(12)}%;
    `}
`;

const Text = styled.div`
    color: ${colors.white};
    ${fontRegular};
    font-weight: normal;
    font-size: 30px;
    line-height: 1.2;

    ${media.sm`
        font-size: 5.3vw;
    `}

    ${media.md`
        font-size: 4.6vw;
    `}

    a {
        color: ${colors.greyDark};
        ${LinkHoverIntroReg}
    }

    a:hover {
        ${media.md`
            color: ${colors.white};
        `}
    }

    p {
        margin: 0.9em 0;
        line-height: 1.2;
    }
`;

export default ({
    text: {childMarkdownRemark: {html}}
}) => (
    <Wrapper>
        <Bg/>
        <Inner>
            <Text dangerouslySetInnerHTML={{
                __html: html.split(' href="http').join(' target="_blank" href="http')
            }}/>
        </Inner>
    </Wrapper>
);
