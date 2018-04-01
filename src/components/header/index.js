import React, {Component} from 'react';
import styled from 'styled-components';
import HeaderLogo from '../header-logo';
import Menu from '../menu';
import {
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Header = styled.header`
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    width: 100%;
    ${'' /* padding: 21px 25px; */}
    ${'' /* background: ${({isScrolled}) => isScrolled ? colors.black : 'transparent'}; */}
    ${'' /* transition: background 0.3s ease; */}
    padding: 40px ${standardMargin}%;

    ${media.md`
        padding: 80px ${standardMarginMd}% 40px;
    `}
`;

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);

        this.state = {
            isScrolled: false
        };
    }

    isScrolled() {
        if (typeof window !== 'undefined') {
            return (window.pageYOffset || document.documentElement.scrollTop) > 0;
        }
        return false;
    }

    onScroll() {
        if (this.isScrolled() !== this.state.isScrolled) {
            this.setState({
                isScrolled: this.isScrolled()
            });
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.onScroll);
        }
    }

    render() {
        const {
            dark,
            links,
            buttons,
            socials
        } = this.props;

        return (
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
        );

        return (
            <Header
                isScrolled={this.state.isScrolled}>
                <Menu
                    dark={dark}
                    links={links}
                    buttons={buttons}
                    socials={socials}
                />
                <HeaderLogo
                    dark={dark}
                    to={'/'}
                />
            </Header>
        );
    }
}
