import React, {Component} from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    media
} from '../../styles';

const Wrapper = styled.div`
    ${'' /* border: 10px dashed green; */}
    position: relative;
    width: 100%;
`;

const ImgHolder = styled.div`
    width: 100vw;
    opacity: ${({loaded}) => loaded ? 1 : 0};
    transition: opacity 0.3s ease-in;

    ${media.md`
    `}
`;

class ImgLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <ImgHolder loaded={this.state.loaded}>
                <Img
                    sizes={this.props.sizes}
                    onLoad={() => this.setState({
                        loaded: true
                    })}
                />
            </ImgHolder>
        );
    }
}

export default ({
    image
}) => (
    <Wrapper>
        <ImgLoader
            sizes={image.sizes}
        />
    </Wrapper>
);
