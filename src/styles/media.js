import {css} from 'styled-components';
import {siteMaxWidth} from './dimensions';

export const sizes = {
    xsm: [320, 'max'],
    min: [639, 'max'],
    sm: [640],
    md: [1220],
    lg: [siteMaxWidth]
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
