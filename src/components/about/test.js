import React from 'react';
import {render} from 'enzyme';
import TextBlock from './';

const props = {
    type: 'TextBlock',
    id: 'c1hehx8UJKKaq02MusgWaUM',
    title: 'Privacy Policy',
    text: {
        childMarkdownRemark: {
            html: '<h2>Lorem ipsum dolor sit amet</h2>\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>'
        }
    }
};

describe('Text block component', () => {
    it('should render', () => {
        const el = render((
            <TextBlock {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
