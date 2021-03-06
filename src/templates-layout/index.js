import React, {Component} from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import {
    colors
} from '../styles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.blackBg};
    transition: background-color 0.2s ease;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
`;

export default class Layouts extends Component {
    render() {

        const {
            children,
            data: {
                menu
            },
            layoutContext: {
                dark
            }
        } = this.props;

        return (
            <Wrapper>
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
