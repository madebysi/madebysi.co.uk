import React, {Component} from 'react';
import styled from 'styled-components';
import {
    media
} from '../../styles';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Img = styled.img`
    display: block;
    width: 100%;
`;

const ImgHolder = styled.div`
    width: 100vw;
    height: ${({aspectRatio}) => 100 / aspectRatio}vw;
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
        const {
            image: {
                title,
                sizes: {
                    aspectRatio,
                    src,
                    srcSet
                }
            }
        } = this.props;

        console.log('this.props', this.props);

        console.log('->', 100 / aspectRatio);

        return (
            <ImgHolder
                aspectRatio={aspectRatio}
                loaded={this.state.loaded}>
                <Img
                    alt={title}
                    src={src}
                    srcSet={srcSet}
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
            image={image}
        />
    </Wrapper>
);
