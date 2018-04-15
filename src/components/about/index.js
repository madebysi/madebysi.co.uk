import React from 'react';
import styled from 'styled-components';
import {
    colors,
    columns,
    fontAlt,
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
    background-color: ${colors.blackBg};
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
        margin: 265px ${standardMarginMd}% 100px;
        width: ${columns(12)}%;
    `}
`;

const Text = styled.div`
    color: ${colors.white};
    ${fontRegular};
    font-size: 24px;
    line-height: 1.29;
    letter-spacing: -0.3px;

    ${media.sm`
        font-size: 36px;
        line-height: 1.5;
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
        margin: 0 0 58px;
        line-height: 1.29;

        ${media.sm`
            line-height: 1.5;
        `}
    }
`;

const Intro = Text.extend`
    ${fontAlt};
    font-size: 28px;

    ${media.sm`
        font-size: 5.3vw;
        line-height: 1.2;
    `}

    ${media.md`
        font-size: 4.6vw;
    `}

    p {
        ${media.sm`
            margin: 0 0 88px;
            line-height: 1.2;
        `}
    }
`;

const addTarget = html => html.split(' href="http').join(' target="_blank" href="http');

export default ({
    intro: {childMarkdownRemark: {html: intro}},
    text: {childMarkdownRemark: {html}}
}) => (
    <Wrapper>
        <Bg/>
        <Inner>
            <Intro dangerouslySetInnerHTML={{
                __html: addTarget(intro)
            }}/>
            <Text dangerouslySetInnerHTML={{
                __html: addTarget(html)
            }}/>
        </Inner>
    </Wrapper>
);
