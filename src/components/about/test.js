import React from 'react';
import {render} from 'enzyme';
import TextBlock from './';

const props = {
    type: 'ContentfulAbout',
    __typename: 'ContentfulAbout',
    id: 'c3OVVelGbA4eAiK82aEwomK',
    intro: {
        childMarkdownRemark: {
            html: '<p>Simon is a Creative Director. Product, UI, UX Designer. He’s developed brands, campaigns, and digital products and services for global brands and tech startups.</p>'
        }
    },
    text: {
        childMarkdownRemark: {
            html: '<p>Recently Freelance at <a href="https://getden.co.uk">Den</a> and worked on projects at Google, +rehabstudio, R/GA, Sapient Nitro, Syzygy and Digitas LBI.</p>\n<p>Say hello\n<a href="hello@madebysi.co.uk">Email</a><span style="color: #606060">,</span> <a href="https://www.linkedin.com/in/simon-patel-19b1b496/">LinkedIn</a></p>'
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
