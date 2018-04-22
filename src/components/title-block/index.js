import React, {Component} from 'react';
import styled from 'styled-components';
import {
    colors,
    fontAlt,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import HeroMedia from './hero-media';

const Wrapper = styled.div`
    background-color: ${({dark}) => dark ? colors.greyLight : colors.blackBg};
    position: relative;
    width: 100%;
`;

const Inner = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 ${standardMargin}%;
    opacity: ${({active}) => active ? 1 : 0.1};
    transition: opacity 0.8s ease-in 0s;

    ${media.sm`
    `}

    ${media.md`
        padding: 0 ${standardMarginMd}%;
    `}
`;

const Title = styled.h1`
    color: ${({dark}) => dark ? colors.black : colors.white};
    ${fontAlt};
    font-size: 38px;
    line-height: 1.29;
    margin: 0 0 28px;

    ${media.sm`
        font-size: 62px;
        line-height: 1.2;
    `}

    ${media.lg`
        font-size: 4.8vw;
    `}
`;

const SubTitle = styled.h3`
    color: ${({dark}) => dark ? colors.black : colors.white};
    ${fontAlt};
    font-size: 18px;
    line-height: 1;

    ${media.sm`
        font-size: 18px;
    `}

    ${media.lg`
        font-size: 1.4vw;
    `}
`;

const Tint = styled.div`
    background-color: black;
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

const Line = styled.div`
    width: ${({active}) => active ? 100 : 0.01}%;
    overflow: hidden;
    transition: width 1.2s ease-in-out ${({delay}) => delay}s;
    white-space: nowrap;
    padding-bottom: 1em;
    margin-bottom: -1em;
`;

class Heading extends Component {
    state = {
        active: false
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.setTimeout(() => this.setState({
                active: true
            }), 1200);
        }
    }

    render() {
        const {
            title,
            subTitle,
            dark
        } = this.props;

        const {active} = this.state;
        const lines = title.split('<br>');
        const delay = 0.1;

        return (
            <Inner active={active}>
                <Title dark={dark}>
                    {lines.map((l, i) => (
                        <Line
                            key={i}
                            active={active}
                            delay={i * delay}>
                            {l}
                        </Line>
                    ))}
                </Title>
                <SubTitle dark={dark}>
                    <Line
                        active={active}
                        delay={(lines.length + 1) * delay}>
                        {subTitle}
                    </Line>
                </SubTitle>
            </Inner>
        );
    }
}

export default ({
    title,
    subTitle,
    dark,
    heroMedia: {file},
    tint
}) => (

    <Wrapper dark={dark}>
        <HeroMedia file={file}/>
        {tint && (
            <Tint/>
        )}
        <Heading
            title={title}
            subTitle={subTitle}
            dark={dark}
        />
    </Wrapper>
);
