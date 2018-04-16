import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logoBlack from './logo-black.svg';
import logoWhite from './logo-white.svg';

const Img = styled.img`
    display: block;
    height: 23.52px;
    position: relative;
    z-index: 1;
`;

export default ({to, dark}) => (
    <Link to={to}>
        <Img src={dark ? logoBlack : logoWhite} alt="madebySi" />
    </Link>
);
