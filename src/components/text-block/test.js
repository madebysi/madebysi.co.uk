import React from 'react';
import {render} from 'enzyme';
import TextBlock from './';

const props = {
    type: 'TextBlock',
    __typename: 'ContentfulTextBlock',
    id: 'c6MnmzBdVkWOy4ESi0s2cWU',
    title: 'Background',
    text: {
        childMarkdownRemark: {
            html: '<p>Google asked us to help build a platform to educate and inspire small to medium sized businesses to grow their companies by improving their digital skills.</p>'
        }
    },
    secondaryText: {
        childMarkdownRemark: {
            html: '<p>The Digital Garage has now launched in 33 European markets to date, with over 1 million users creating an account and over 6 million completed lessons.</p>'
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
