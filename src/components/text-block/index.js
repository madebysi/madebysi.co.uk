import React from 'react';
import styled from 'styled-components';
import {
    colors,
    columns,
    fontRegular,
    maxGridWidth,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.article`
    position: relative;
    width: 100%;
    max-width: ${maxGridWidth}px;
    margin: 0 auto;
`;

const Inner = styled.div`
    margin: ${standardMargin}%;

    ${media.md`
        margin: ${standardMarginMd}%;
        width: ${columns(7)}%;
    `}
`;

const Heading = styled.h2`
    color: ${colors.black};
    ${fontRegular};
    font-size: 16px;
    line-height: 1;
    margin: 0 0 28px;

    ${media.md`
        font-size: 16px;
    `}
`;

const TextHolder = styled.div`
    color: ${colors.black};
    ${fontRegular};
    font-size: 22px;
    line-height: 1.38;
    margin: 0;

    ${media.md`
        font-size: 26px;
    `}
`;

const SecondaryTextHolder = TextHolder.extend`
    font-size: 18px;
    line-height: 1.8;
    margin: 40px 0 0;

    ${media.md`
        font-size: 20px;
    `}
`;

export default ({
    title,
    text: {childMarkdownRemark: {html}},
    secondaryText
}) => (
    <Wrapper>
        <Inner>
            <Heading>{title}</Heading>
            <TextHolder dangerouslySetInnerHTML={{
                __html: html
            }}/>
            {secondaryText && (
                <SecondaryTextHolder dangerouslySetInnerHTML={{
                    __html: secondaryText.childMarkdownRemark.html
                }}/>
            )}
        </Inner>
    </Wrapper>
);
