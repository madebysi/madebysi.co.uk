import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
    colors,
    columns,
    fontRegular,
    LinkHover,
    LinkHoverIntro,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import formatLink from '../../utils/format-link';

const Wrapper = styled.div`
    ${'' /* border: 10px dashed purple; */}
    background-color: #f9f9f9;
    width: 100%;
`;

const Inner = styled.div`
    position: relative;
    z-index: 20;
    ${fontRegular}
    font-size: 48px;
    line-height: 1.65;
    margin: ${standardMargin}%;

    ${media.md`
        margin: ${standardMarginMd}%;
        width: ${columns(9)}%;
    `}
`;

const Links = styled.div`
    position: relative;
    z-index: 20;
`;

const MenuLink = styled(Link)`
    color: ${colors.black};
    ${({intro}) => intro ? LinkHoverIntro : LinkHover}
`;

const LinkItem = styled.span`
    display: block;
    opacity: ${({active, hover}) => !hover || active ? 1 : 0.3};
    ${'' /* color: ${({active, hover}) => hover && active ? colors.white : colors.black}; */}
    transition:
        opacity 0.1s linear,
        color 0.1s linear;

    ${media.md`
        display: inline;
        &:after {
            content: ", ";
            opacity: ${({active, hover}) => !hover || !active ? 1 : 0.3};
            transition: opacity 0.1s linear;
        }

        &:last-child:after {
            content: "";
        }
    `}
`;

export const LinkList = ({
    intro = false,
    pages,
    hover,
    hoverSlug,
    onMouseOver = () => {},
    onMouseOut = () => {},
    LinkComponent = MenuLink
}) => (
    <Links>
        {pages
            .map(({title, slug}) => (
                <LinkItem
                    key={slug}
                    hover={hover}
                    active={hoverSlug === slug}>
                    <LinkComponent
                        intro={intro}
                        onMouseOver={() => onMouseOver(slug)}
                        onMouseOut={() => onMouseOut(slug)}
                        to={formatLink(slug)}>
                        {title}
                    </LinkComponent>
                </LinkItem>
            ))}
    </Links>
);

export default props => (
    <Wrapper>
        {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
        <Inner>
            <LinkList
                {...props}
                pages={props.pages.filter(({id}) => id !== props.page.id)}
            />
        </Inner>
    </Wrapper>
);
