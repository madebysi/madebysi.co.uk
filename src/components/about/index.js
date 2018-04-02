import React from 'react';
import styled from 'styled-components';
import {
    colors,
    columns,
    fontRegular,
    LinkHoverIntro,
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

const Bg = styled.div`
    background-color: #000000;
    ${'' /* background-color: blue; */}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Inner = styled.div`
    ${'' /* border: 10px dashed green; */}
    padding: 0 ${standardMargin}%;
    width: 100%;
    position: relative;
    z-index: 1;

    ${media.md`
        padding: 0;
        margin: 0 ${standardMarginMd}%;
        width: ${columns(12)}%;
    `}
`;

const Text = styled.div`
    color: ${colors.white};
    ${fontRegular};
    font-weight: normal;
    font-size: 30px;
    line-height: 1.2;

    ${media.md`
        font-size: 60px;
    `}

    a {
        color: ${colors.greyDark};
        ${LinkHoverIntro}

        &:hover {
            color: ${colors.white};
        }
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
