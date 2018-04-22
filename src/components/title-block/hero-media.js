import React, {Component} from 'react';
import styled from 'styled-components';
import {media} from '../../styles';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    ${media.sm`
        max-height: 91vw;
    `}
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    opacity: ${({loaded}) => loaded ? 1 : 0};
    transition: opacity 0.3s ease-in;
`;

const Video = styled.video`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    opacity: ${({loaded}) => loaded ? 1 : 0};
    transition: opacity 0.3s ease-in;

    &::-webkit-media-controls,
    &::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
`;

class ImgLoader extends Component {
    state = {
        loaded: false
    }

    render() {
        const {
            url
        } = this.props;

        return (
            <Image
                loaded={this.state.loaded}
                src={url}
                alt={url}
                onLoad={() => this.setState({
                    loaded: true
                })}
            />
        );
    }
}

class VideoLoader extends Component {
    state = {
        loaded: false
    }

    onReady() {
        this.setState({
            loaded: true
        });
    }

    render() {
        const {
            url,
            contentType
        } = this.props;

        return (
            <Video
                loaded={this.state.loaded}
                onCanPlay={() => this.onReady()}
                onLoadedMetadata={() => this.onReady()}
                muted
                autoPlay
                loop
                playsInline>
                <source
                    src={url}
                    type={contentType}
                />
            </Video>
        );
    }
}

const isVideo = contentType => contentType.indexOf('video') === 0;

export default ({
    file: {url, contentType}
}) => (
    <Wrapper>
        {isVideo(contentType) ? (
            <VideoLoader
                url={url}
                contentType={contentType}
            />
        ) : (
            <ImgLoader
                url={url}
            />
        )}
    </Wrapper>
);
