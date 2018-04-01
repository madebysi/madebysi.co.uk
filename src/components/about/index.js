import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    LinkHover,
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
    padding: 0 ${standardMargin}%;
    width: 100%;

    ${media.md`
        padding: 40px ${standardMarginMd}%;
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
        color: ${colors.grey};
        ${LinkHover}

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
        <Inner>
            <Text dangerouslySetInnerHTML={{
                __html: html
            }}/>
        </Inner>
    </Wrapper>
);
