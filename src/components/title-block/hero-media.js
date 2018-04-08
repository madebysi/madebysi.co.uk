import React from 'react';
import styled from 'styled-components';
import {
    media
} from '../../styles';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: none;

    ${media.sm`
        display: block;
    `}
`;

const Image = styled.img`
    display: block;
    width: 100%;
`;

const Video = styled.video`
    display: block;
    width: 100%;

    &::-webkit-media-controls,
    &::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
`;

const isVideo = contentType => contentType.indexOf('video') === 0;

export default ({
    file: {url, contentType}
}) => (
    <Wrapper>
        {isVideo(contentType) ? (
            <Video
                muted
                autoPlay
                loop
                playsInline>
                <source
                    src={url}
                    type={contentType}
                />
            </Video>
        ) : (
            <Image
                src={url}
                alt={url}
            />
        )}
    </Wrapper>
);
