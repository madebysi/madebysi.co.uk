import {css} from 'styled-components';
import {maxGridWidth} from './dimensions';

export const sizes = {
    min: [320, 'max'],
    sm: [640],
    md: [1024],
    lg: [maxGridWidth]
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
