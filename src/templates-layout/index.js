import React, {Component} from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import {
    colors
    // maxSiteWidth
} from '../styles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.blackest};
    transition: background-color 0.2s ease;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    ${'' /* max-width: ${maxSiteWidth}px; */}
    margin: 0 auto;
`;

export default class Layouts extends Component {
    render() {

        const {
            children,
            location: {
                pathname
            },
            data: {
                menu
            },
            layoutContext: {
                dark
            }
        } = this.props;

        console.log('page', pathname, pathname.replace(/\//g, ''), dark ? 'dark' : 'light');

        return (
            <Wrapper>
                {/* <pre>{JSON.stringify(menu, null, 2)}</pre> */}
                <Header
                    {...menu}
                    dark={dark}
                />
                {children()}
            </Wrapper>
        );

    }
}

export const query = graphql`
  query LayoutQuery {
  menu: contentfulMenu {
    links {
      label
      url
    }
  }
}
`;
