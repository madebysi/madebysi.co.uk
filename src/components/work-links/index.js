import React from 'react';
import styled from 'styled-components';
import {
    colors,
    media,
    standardMarginMd
} from '../../styles';
import WorkMenu from '../work-menu';

const Bg = styled.div`
    background-color: ${colors.greyLight};
    width: 100%;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;

    ${media.md`
        &::after {
            content: "";
            display: block;
            padding-bottom: 56.25%;
            width: 100%;
        }
    `}
`;

const Inner = styled.div`
    width: 100%;

    ${media.md`
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        padding-top: ${standardMarginMd}%;
    `}
`;

export default ({
    pages,
    page,
    LinkComponent
}) => (
    <Bg>
        <Wrapper>
            <Inner>
                <WorkMenu
                    pages={pages.filter(({id}) => id !== page.id)}
                    LinkComponent={LinkComponent}
                />
            </Inner>
        </Wrapper>
    </Bg>
);
