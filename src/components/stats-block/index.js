import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    fontAlt,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.article`
    background-color: ${colors.white};
    position: relative;
    width: 100%;
`;

const Inner = styled.div`
    position: relative;
    width: 100%;
    padding: ${standardMargin}% ${standardMargin}%;

    ${media.md`
        padding: ${standardMarginMd / 2}% ${standardMarginMd}%;
    `}
`;

const Name = styled.h3`
    ${fontAlt};
    color: ${colors.black};
    opacity: 0.5;
    font-size: 14px;
    line-height: 1;
    margin: 0 0 12px;

    ${media.md`
        color: ${colors.grey};
        font-size: 18px;
    `}
`;

const Value = styled.p`
    ${fontRegular};
    color: ${colors.black};
    font-size: 18px;
    line-height: 1;
    margin: 0 0 34px;

    ${media.md`
        font-size: 20px;
    `}
`;

const StatsList = styled.ul`
`;

const StatsItem = styled.li`
`;

export default ({
    stats
}) => (
    <Wrapper>
        <Inner>
            <StatsList>
                {stats.map(({name, value}) => (
                    <StatsItem key={name + value}>
                        <Name>{name}</Name>
                        <Value>{value}</Value>
                    </StatsItem>
                ))}
            </StatsList>
        </Inner>
    </Wrapper>
);
