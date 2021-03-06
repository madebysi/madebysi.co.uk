import React, {Component} from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import {
    colors,
    fontAlt,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import arrowLeft from './arrow_left.png';
import arrowRight from './arrow_right.png';
import ImageBlock from '../image-block';

const Wrapper = styled.div`
    background-color: ${colors.white};
    position: relative;
    width: 100%;
`;

const ImgHolder = styled.div`
    width: 100vw;
    cursor: url(${({cursor}) => cursor}), auto;
`;

const Counter = styled.div`
    color: ${colors.black};
    ${fontAlt};
    font-size: 14px;
    line-height: 1;
    opacity: 0.5;
    margin: ${standardMargin / 2}% ${standardMargin}%;

    ${media.sm`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        font-size: 16px;
        margin: ${standardMarginMd / 2}% ${standardMarginMd}%;
    `}
`;

const settings = {
    wrapAround: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // cellAlign: 'center',
    // slideWidth: '100vw',
    renderCenterLeftControls: () => null,
    renderCenterRightControls: () => null,
    renderBottomCenterControls: () => null,
    speed: 500,
    heightMode: 'max'
};

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.onMouseMove = this.onMouseMove.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            slideIndex: 0,
            direction: 0,
            cursor: 'auto'
        };
    }

    onMouseMove(event) {
        const pos = event.clientX / window.innerWidth;
        let direction = 0;
        let cursor = 'auto';
        if (pos > 0.6) {
            direction = 1;
            cursor = arrowRight;
        }
        if (pos < 0.4) {
            direction = -1;
            cursor = arrowLeft;
        }
        if (this.state.direction !== direction) {
            this.setState({
                direction,
                cursor
            });
        }
    }

    onClick(event) {
        event.stopPropagation();
        if (this.state.direction !== 0) {
            let slideIndex = this.state.slideIndex + this.state.direction;
            const last = this.props.images.length - 1;
            if (slideIndex > last) {
                slideIndex = 0;
            }
            if (slideIndex < 0) {
                slideIndex = last;
            }
            this.setState({slideIndex});
        }
    }

    afterSlide(slideIndex) {
        this.setState({slideIndex});
    }

    render() {
        return (
            <Wrapper
                onMouseMove={this.onMouseMove}
                onClick={this.onClick}>
                <Carousel
                    {...settings}
                    slideIndex={this.state.slideIndex}
                    afterSlide={slideIndex => this.afterSlide(slideIndex)}>
                    {this.props.images.map(image => (
                        <ImgHolder
                            key={image.id}
                            cursor={this.state.cursor}>
                            <ImageBlock
                                image={image}
                            />
                        </ImgHolder>
                    ))}
                </Carousel>
                <Counter>{this.state.slideIndex + 1} / {this.props.images.length}</Counter>
            </Wrapper>
        );
    }
}
