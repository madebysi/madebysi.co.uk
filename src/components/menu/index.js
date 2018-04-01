import React, {Component} from 'react';
import Link from 'gatsby-link';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {
    fontRegular,
    media,
    colors,
    standardMargin
} from '../../styles';
import BurgerMenuIcon from './burger-menu.svg';
import CloseMenuIcon from './close-menu.svg';
import BurgerMenuIconDark from './burger-menu-dark.svg';
import CloseMenuIconDark from './close-menu-dark.svg';
import formatLink from '../../utils/format-link';

const Container = styled.div`
    display: flex;

    ${media.md`
        flex-grow: 1;
    `}
`;

const Menu = styled.nav`
    background-color: ${({dark}) => dark ? colors.black : colors.white};
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    right: ${({isClosed}) => !isClosed ? 0 : -100}%;
    transition: right .2s ease-out;
    padding: 0 ${standardMargin}%;
    margin-top: 150px;
    flex-grow: 1;

    ${media.md`
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

    ${media.md`
        flex-direction: row;
    `}
`;

const LinkItem = styled.li`
    margin-bottom: 26px;
    text-align: left;

    ${media.md`
        margin-bottom: 0;
        margin-right: 28px;
        text-align: left;
    `}
`;

const MenuLink = styled(Link)`
    ${fontRegular};
    font-size: 20px;
    opacity: 0.4;
    transition: opacity 0.4s ease;

    &.active {
        opacity: 1;
    }

    ${media.md`
        font-size: 20px;
    `}
`;

const LinkLabel = styled.span`
    color: ${({dark}) => dark ? colors.white : colors.black};
    transition: color 0.4s ease;
`;

const BurgerMenuLink = styled.div`
    ${({dark}) => dark && css`
        background-image: url(${({menuClosed}) => menuClosed ? BurgerMenuIconDark : CloseMenuIconDark});
    `}
    ${({dark}) => !dark && css`
        background-image: url(${({menuClosed}) => menuClosed ? BurgerMenuIcon : CloseMenuIcon});
    `}
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    position: relative;
    ${'' /* position: absolute; */}
    ${'' /* left: 25px; */}
    ${'' /* top: 28px; */}
    width: 28px;
    height: 19px;
    text-indent: -9999em;

    ${media.md`
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
        this.setState({
            menuClosed: !this.state.menuClosed
        });
    }

    render() {
        const {
            dark,
            links,
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
                                    exact={!(url.replace(/\//g, ''))}
                                    to={formatLink(url)}
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