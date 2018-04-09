import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../header-logo';
import Menu from '../menu';
import {
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Header = styled.header`
    position: absolute;
    width: 100%;
    height: 153px;
`;

const Inner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    width: 100%;
    padding: 40px ${standardMargin}%;

    ${media.md`
        padding: 80px ${standardMarginMd}% 40px;
    `}
`;

export default ({
    dark,
    links,
    buttons,
    socials
}) => (
    <Header>
        <Inner>
            <Menu
                dark={dark}
                links={links}
                buttons={buttons}
                socials={socials}
            />
            <HeaderLogo
                dark={dark}
                to={'/'}
            />
        </Inner>
    </Header>
);
