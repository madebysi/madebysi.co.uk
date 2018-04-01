import React from 'react';
import styled from 'styled-components';
import {
    colors,
    fontRegular,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.article`
    position: relative;
    width: 100%;
    padding: ${standardMargin / 2}% ${standardMargin}%;

    ${media.md`
        padding: ${standardMarginMd / 2}% ${standardMarginMd}%;
    `}
`;

const Name = styled.h3`
    ${fontRegular};
    color: ${colors.black};
    opacity: 0.5;
    font-size: 16px;
    line-height: 1;
    margin: 0 0 12px;

    ${media.md`
    `}
`;

const Value = styled.p`
    ${fontRegular};
    color: ${colors.black};
    font-size: 20px;
    line-height: 1;
    margin: 0 0 34px;

    ${media.md`
    `}
`;

const StatsList = styled.ul`
`;

const StatsItem = styled.li`
`;
// export default props => <pre>{JSON.stringify(props, null, 2)}</pre>;
export default ({
    stats
}) => (
    <Wrapper>
        <StatsList>
            {stats.map(({name, value}) => (
                <StatsItem key={name + value}>
                    <Name>{name}</Name>
                    <Value>{value}</Value>
                </StatsItem>
            ))}
        </StatsList>
    </Wrapper>
);
