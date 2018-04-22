import React, {Component} from 'react';
import styled from 'styled-components';
import {
    colors,
    fontAlt,
    media,
    standardMargin,
    standardMarginMd,
    standardMarginTop
} from '../../styles';
import WorkMenu from '../work-menu';

const Wrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${media.sm`
        justify-content: flex-end;
    `}
`;

const Bg = styled.div`
    background-color: ${colors.greyLight};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Inner = styled.div`
    width: 100%;
    margin-top: ${standardMarginTop}px;

    ${media.sm`
        margin-top: 0;
    `}
`;

const TextHolder = styled.div`
    ${fontAlt}
    font-size: 30px;
    position: relative;
    margin: 0 ${standardMargin}%;
    flex-grow: none;
    line-height: 1.22;
    letter-spacing: 0px;

    ${media.sm`
        font-size: 5.4vw;
        width: 70%;
    `}

    ${media.md`
        font-size: 4.7vw;
        margin: 0 ${standardMarginMd}%;
        width: 60%;
    `}
`;

const Intro = styled.div`
    color: ${colors.grey};
    margin-bottom: 12px;

    ${media.md`
        margin-bottom: 0;
    `}
`;

export default class IntroComponent extends Component {
    state = {
        hover: false,
        hoverSlug: null
    }

    render() {
        const {
            intro: {
                childMarkdownRemark: {html}
            },
            links: {
                pages
            },
            LinkComponent
        } = this.props;

        return (
            <Wrapper>
                <Bg/>
                <Inner>
                    <TextHolder>
                        <Intro dangerouslySetInnerHTML={{
                            __html: html
                        }}/>
                    </TextHolder>
                    <WorkMenu
                        intro={true}
                        pages={pages}
                        LinkComponent={LinkComponent}
                    />
                </Inner>
            </Wrapper>
        );
    }
}
