import React, {Component} from 'react';
import Link from 'gatsby-link';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {
    fontAlt,
    media,
    colors,
    standardMargin
} from '../../styles';
import BurgerMenuIcon from './burger-menu.svg';
import CloseMenuIcon from './close-menu.svg';
import BurgerMenuIconDark from './burger-menu-dark.svg';
import CloseMenuIconDark from './close-menu-dark.svg';
import pagePathname from '../../utils/page-pathname';
import stopScroll from '../../utils/stop-scroll';

const Container = styled.div`
    display: flex;

    ${media.md`
        flex-grow: 1;
    `}
`;

const Menu = styled.nav`
    background-color: ${({dark}) => dark ? colors.greyLight : colors.blackBg};
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    right: ${({isClosed}) => !isClosed ? 0 : -100}%;
    transition: right .2s ease-out;
    padding: 85px ${standardMargin}% 0;
    ${'' /* margin-top: 85px; */}
    flex-grow: 1;

    ${media.sm`
        position: static;
        margin-top: 0;
        padding: 0;
        flex-direction: row;
        align-items: center;
        background-color: transparent;
        width: auto;
        height: auto;
    `}
`;

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    ${media.sm`
        margin-top: 0;
        flex-direction: row;
    `}
`;

const LinkItem = styled.li`
    margin-bottom: 26px;
    text-align: left;

    ${media.sm`
        margin-bottom: 0;
        margin-right: 28px;
        text-align: left;
    `}
`;

const MenuLink = styled(Link)`
    ${fontAlt};
    font-size: 36px;
    opacity: 0.4;
    transition: opacity 0.4s ease;

    &.active {
        opacity: 1;
    }

    ${media.sm`
        font-size: 20px;
    `}

    &:hover {
        ${media.sm`
            opacity: 1;
        `}
    }
`;

const LinkLabel = styled.span`
    color: ${({dark}) => dark ? colors.black : colors.white};
    transition: color 0.4s ease;
`;

const BurgerMenuLink = styled.div`
    ${({dark}) => dark && css`
        background-image: url(${({menuClosed}) => menuClosed ? BurgerMenuIcon : CloseMenuIcon});
    `}
    ${({dark}) => !dark && css`
        background-image: url(${({menuClosed}) => menuClosed ? BurgerMenuIconDark : CloseMenuIconDark});
    `}
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    position: relative;
    width: 28px;
    height: 19px;
    text-indent: -9999em;
    z-index: 1;

    ${media.sm`
        display: none;
    `}
`;

class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuClosed: typeof props.menuClosed !== 'undefined' ? props.menuClosed : true
        };

        this.onClickBurgerLink = this.onClickBurgerLink.bind(this);
    }

    onClickBurgerLink() {
        const menuClosed = !this.state.menuClosed;
        this.setState({menuClosed});
        stopScroll(!menuClosed);
    }

    render() {
        const {
            dark,
            links,
            location: {pathname},
            LinkComponent = MenuLink
        } = this.props;

        return (
            <Container>
                <Menu
                    dark={dark}
                    isClosed={this.state.menuClosed}>
                    <Links>
                        {links.map(({label, url}) => (
                            <LinkItem key={label}>
                                <LinkComponent
                                    onClick={this.onClickBurgerLink}
                                    // exact={!(url.replace(/\//g, ''))}
                                    exact={pathname.replace(/\//g, '') === 'about'}
                                    to={pagePathname(url)}
                                    activeClassName="active">
                                    <LinkLabel dark={dark}>
                                        {label}
                                    </LinkLabel>
                                </LinkComponent>
                            </LinkItem>
                        ))}
                    </Links>
                </Menu>
                <BurgerMenuLink
                    dark={dark}
                    menuClosed={this.state.menuClosed}
                    onClick={this.onClickBurgerLink}>
                    Toggle menu
                </BurgerMenuLink>
            </Container>
        );
    }
}

export default withRouter(MenuComponent);
