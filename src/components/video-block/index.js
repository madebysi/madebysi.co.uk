import React, {Component} from 'react';
import styled from 'styled-components';
import {
    colors,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.div`
    cursor: ${({autoLoop}) => autoLoop ? 'auto' : 'pointer'};
    position: relative;
    width: 100%;
    background-color: ${colors.greyLight};
    transition: background-color 0.4s ease;

    &::after {
        background-color: ${colors.blackBg};
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    &:hover::after {
        ${media.sm`
            opacity: ${({playing}) => playing ? 0 : 0.2};
        `}
    }

`;

const Bg = styled.div`
    position: relative;
    width: 100%;
`;

const Inner = styled.div`
    position: relative;
    width: 100%;
    padding: ${standardMargin}%;

    ${media.md`
        padding: ${standardMarginMd}%;
    `}
`;

const PlayButton = styled.div`
    color: ${colors.white};
    font-size: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: ${({playing}) => playing ? 0 : 1};
    transition: opacity 0.2s ease;

    ${media.md`
        font-size: 48px;
    `}
`;

const Video = styled.video`
    display: block;
    width: 100%;

    &::-webkit-media-controls,
    &::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
`;

export default class VideoBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: props.autoLoop
        };
    }

    togglePlay() {
        if (this.props.autoLoop) {
            return;
        }
        if (this.state.playing) {
            this.video.pause();
            this.setState({playing: false});
        } else {
            this.video.play();
            this.setState({playing: true});
        }
    }

    componentDidMount() {
        if (!this.props.autoLoop) {
            try {
                this.video.play().then(() => this.video.pause());
            } catch (e) {}
        }
    }

    render() {
        const {
            id,
            video: {
                file: {
                    contentType,
                    url
                }
            },
            autoLoop = false
        } = this.props;

        return (
            <Wrapper
                autoLoop={autoLoop}
                playing={this.state.playing}
                onClick={() => this.togglePlay()}>
                <Bg>
                    <Inner>
                        <Video
                            id={id}
                            innerRef={video => (this.video = video)}
                            muted={autoLoop}
                            autoPlay={autoLoop}
                            loop={autoLoop}
                            playsInline>
                            <source
                                src={url}
                                type={contentType}
                            />
                        </Video>
                        {!autoLoop && (
                            <PlayButton
                                playing={this.state.playing}>
                        play
                            </PlayButton>
                        )}
                    </Inner>
                </Bg>
            </Wrapper>
        );
    }
}
