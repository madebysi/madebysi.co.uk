import React, {Component} from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';
import {
    colors,
    fontAlt,
    // maxSiteWidth,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';
import arrowLeft from './arrow_left.png';
import arrowRight from './arrow_right.png';

const Wrapper = styled.div`
    background-color: ${colors.white};
    position: relative;
    width: 100%;
`;

const ImgHolder = styled.div`
    width: 100vw;
    ${'' /* max-width: ${maxSiteWidth}px; */}
    opacity: ${({loaded}) => loaded ? 1 : 0};
    transition: all 0.3s ease-in;
    cursor: url(${({cursor}) => cursor}), auto;
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
            <ImgHolder cursor={this.props.cursor} loaded={this.state.loaded}>
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

const Counter = styled.div`
    color: ${colors.greyDarker};
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
        // const {slideIndex} = this.state;
        // const last = this.props.images.length - 1;
        // if (pos > 0.6 && slideIndex < last) {
        if (pos > 0.6) {
            direction = 1;
            cursor = arrowRight;
        }
        // if (pos < 0.4 && slideIndex > 0) {
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
            // if (slideIndex < 0 || slideIndex > last) {
            //     this.setState({
            //         direction: 0,
            //         cursor: 'auto'
            //     });
            // } else {
            //     this.setState({slideIndex});
            // }
            this.setState({slideIndex});
        }
    }

    afterSlide(slideIndex) {
        // const last = this.props.images.length - 1;
        // if (slideIndex === 0 || slideIndex === last) {
        //     this.setState({
        //         direction: 0,
        //         cursor: 'auto',
        //         slideIndex
        //     });
        // } else {
        // }
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
                    {this.props.images.map(({id, sizes}) => (
                        <ImgLoader
                            key={id}
                            cursor={this.state.cursor}
                            sizes={sizes}
                        />
                    ))}
                </Carousel>
                <Counter>{this.state.slideIndex + 1} / {this.props.images.length}</Counter>
            </Wrapper>
        );
    }
}
