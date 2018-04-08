import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: ${({fullPage}) => fullPage ? 'fixed' : 'absolute'};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    pointer-events: none;
    backface-visibility: hidden;
`;

const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: ${({hover}) => hover ? 1 : 0};
    transition-property: opacity;
    transition-duration: ${({hover}) => hover ? 0.3 : 0.6}s;
    transition-delay: ${({hover}) => hover ? 0 : 0.1}s;
    transition-timing-function: ease;
    z-index: ${({hover}) => hover ? 1 : 0};
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Video = styled.video`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &::-webkit-media-controls,
    &::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
`;

const isVideo = contentType => contentType.indexOf('video') === 0;

const Media = ({
    file: {url, contentType},
    hover
}) => (
    <Inner hover={hover}>
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
    </Inner>
);

export default ({
    pages,
    hover,
    hoverSlug,
    fullPage
}) => (
    <Wrapper fullPage={fullPage}>
        {pages.map(({
            slug,
            hoverMedia: {file}
        }) => (
            <Media
                key={slug}
                file={file}
                hover={hover && hoverSlug === slug}
            />
        ))}
    </Wrapper>
);
