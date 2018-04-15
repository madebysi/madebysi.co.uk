import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
    colors,
    columns,
    fontAlt,
    LinkHoverIntro,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import HoverMedia from './hover-media';
import mobile from 'usfl/platform/mobile';
import pagePathname from '../../utils/page-pathname';

const isMobile = mobile();

const Wrapper = styled.div`
    width: 100%;
`;

const TextHolder = styled.div`
    ${fontAlt}
    font-size: 30px;
    margin: ${standardMargin}%;
    flex-grow: none;
    line-height: 1.22;
    letter-spacing: 0px;

    ${media.sm`
        font-size: 5.4vw;
        width: 70%;
        margin-bottom: ${standardMargin * 2}%;
        margin-top: 0;
    `}

    ${media.md`
        font-size: 4.7vw;
        margin: ${standardMarginMd}%;
        margin-top: 0;
        width: ${columns(12)}%;
    `}
`;

const Links = styled.div`
    position: relative;

    ${media.sm`
        z-index: 20;
    `}
`;

const MenuLink = styled(Link)`
    color: ${colors.black};
    ${LinkHoverIntro}
`;

const opacityInactive = 0.15;

const LinkItem = styled.span`
    display: block;
    opacity: ${({active, hover}) => !hover || active ? 1 : opacityInactive};
    transition:
        opacity 0.1s linear,
        color 0.1s linear;
    margin-bottom: 10px;

    ${media.sm`
        display: inline;
        margin-bottom: 0;
        &:after {
            content: ", ";
            opacity: ${({active, hover}) => !hover || !active ? 1 : 0};
            transition: opacity 0.1s linear;
        }

        &:last-child:after {
            content: ".";
        }
    `}
`;

export default class IntroComponent extends Component {
    state = {
        hover: false,
        hoverSlug: null
    }

    render() {
        const {
            intro = false,
            pages,
            LinkComponent = MenuLink
        } = this.props;

        return (
            <Wrapper>
                <TextHolder>
                    <Links>
                        {pages
                            .map(({title, slug}) => (
                                <LinkItem
                                    key={slug}
                                    hover={this.state.hover}
                                    active={this.state.hoverSlug === slug}>
                                    <LinkComponent
                                        onMouseOver={() => {
                                            if (window.innerWidth < 480) {
                                                return;
                                            }
                                            this.setState({
                                                hover: true,
                                                hoverSlug: slug
                                            });
                                        }
                                        }
                                        onMouseOut={() => this.setState({
                                            hover: false
                                        })}
                                        to={pagePathname(slug)}>
                                        {title}
                                    </LinkComponent>
                                </LinkItem>
                            ))}
                    </Links>
                </TextHolder>
                {!isMobile && (
                    <HoverMedia
                        fullPage={intro}
                        hover={this.state.hover}
                        hoverSlug={this.state.hoverSlug}
                        pages={pages}
                    />
                )}
            </Wrapper>
        );
    }
}
