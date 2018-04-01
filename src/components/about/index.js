import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    LinkHover,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';


const Wrapper = styled.div`
    padding: 40px ${standardMargin}%;

    ${media.md`
        padding: 40px ${standardMarginMd}%;
    `}
`;

const Text = styled.div`
    color: ${colors.white};
    ${fontRegular};
    font-weight: normal;
    font-size: 60px;
    line-height: 1.2;

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
        <Text dangerouslySetInnerHTML={{
            __html: html
        }}/>
    </Wrapper>
);
