import React, {Component} from 'react';
import styled from 'styled-components';
import {
    colors,
    maxGridWidth,
    media,
    standardMargin,
    standardMarginMd
} from '../../styles';

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    width: 100%;
`;

const Bg = styled.div`
    position: relative;
    width: 100%;
    ${'' /* max-width: ${maxGridWidth}px; */}
    ${'' /* margin: 0 auto; */}
`;

const Inner = styled.div`
    position: relative;
    width: 100%;
    padding: ${standardMargin}%;

    ${media.md`
        padding: ${standardMarginMd}%;
        max-width: calc(${maxGridWidth}px + ${standardMarginMd * 2}%);
        margin: 0 auto;
    `}
`;

const PlayButton = styled.button`
    cursor: pointer;
    color: ${colors.white};
    font-size: 48px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: ${({playing}) => playing ? 0 : 1};
    transition: opacity 0.2s ease;
`;

const Video = styled.video`
    display: block;
    width: 100%;

    &::-webkit-media-controls {
        display: none !important;
    }
`;
// export default props => <pre>{JSON.stringify(props, null, 2)}</pre>;
export default class VideoBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: props.autoLoop
        };
    }

    onPlay() {
        this.video.play();

        this.setState({playing: true});
    }

    onPause() {
        if (this.props.autoLoop || !this.state.playing) {
            return;
        }

        this.video.pause();

        this.setState({playing: false});
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
            <Wrapper>
                <Bg>
                    <Inner>
                        <Video
                            innerRef={video => (this.video = video)}
                            id={id}
                            ref={el => (this.el = el)}
                            muted
                            autoPlay={autoLoop}
                            loop={autoLoop}
                            playsInline
                            onClick={() => this.onPause()}>
                            <source
                                src={url}
                                type={contentType}
                            />
                        </Video>
                        {!autoLoop && (
                            <PlayButton
                                playing={this.state.playing}
                                onClick={() => this.onPlay()}>
                        play
                            </PlayButton>
                        )}
                    </Inner>
                </Bg>
            </Wrapper>
        );
    }
}
