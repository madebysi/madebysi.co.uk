import React, {Component} from 'react';
import styled from 'styled-components';
import {
    colors,
    columns,
    maxGridWidth,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import WorkMenu from '../work-menu';

const Wrapper = styled.div`
    width: 100%;
    max-width: ${maxGridWidth}px;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    ${media.md`
        justify-content: flex-end;
    `}
`;

const Bg = styled.div`
    background-color: ${colors.greyLight};
    ${'' /* background-color: red; */}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Inner = styled.div`
    width: 100%;
`;

const TextHolder = styled.div`
    font-size: 30px;
    position: relative;
    margin: 0 ${standardMargin}%;
    flex-grow: none;
    line-height: 1.22;
    letter-spacing: -1.2px;

    ${media.md`
        font-size: 4.6vw;
        margin: 0 ${standardMarginMd}%;
        width: ${columns(12)}%;
    `}

    ${media.lg`
        font-size: 73.6px;
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
