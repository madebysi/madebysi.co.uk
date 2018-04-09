import {css} from 'styled-components';

export const sizes = {
    min: [320, 'max'],
    sm: [480],
    md: [960],
    lg: [1280]
};

export const media = Object.keys(sizes).reduce((ob, key) => {
    const [size, bound = 'min'] = sizes[key];
    const em = size / 16;
    ob[key] = (...args) => css`
        @media (${bound}-width: ${em}em) {
            ${css(...args)}
        }
    `;
    return ob;
}, {});
