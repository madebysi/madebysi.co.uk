import React, {Component} from 'react';
import styled from 'styled-components';
import {
    columns,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import {LinkList} from '../work-links';
import HoverMedia from './hover-media';
import mobile from 'usfl/platform/mobile';

const isMobile = mobile();

const Wrapper = styled.div`
    ${'' /* border: 10px dashed purple; */}
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const TextHolder = styled.div`
    font-size: 30px;
    position: relative;
    margin: ${standardMargin}%;
    flex-grow: none;

    ${media.md`
        // border: 10px dashed green;
        font-size: 5vw;
        margin: ${standardMarginMd}%;
        margin-top: 0;
        width: ${columns(11)}%;
    `}
`;

const Intro = styled.div`
    opacity: 0.4;
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
                <TextHolder>
                    <Intro dangerouslySetInnerHTML={{
                        __html: html
                    }}/>
                    <LinkList
                        hover={this.state.hover}
                        hoverSlug={this.state.hoverSlug}
                        pages={pages}
                        onMouseOver={hoverSlug => this.setState({
                            hover: true,
                            hoverSlug
                        })}
                        onMouseOut={() => this.setState({
                            hover: false
                        })}
                        LinkComponent={LinkComponent}
                    />
                </TextHolder>
                {!isMobile && (
                    <HoverMedia
                        hover={this.state.hover}
                        hoverSlug={this.state.hoverSlug}
                        pages={pages}
                    />
                )}
            </Wrapper>
        );
    }
}
