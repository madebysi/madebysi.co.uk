import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {colors, media} from '../../styles';

const Logo = styled.span`
    color: ${({dark}) => dark ? colors.black : colors.white};
    transition: color 0.4s ease;
    font-size: 21px;
    font-weight: bold;
    position: relative;
    z-index: 1;

    ${media.md`
        font-size: 24px;
    `}
`;

export default ({to, dark}) => (
    <Link to={to}>
        <Logo dark={dark}>madebySi</Logo>
    </Link>
);
