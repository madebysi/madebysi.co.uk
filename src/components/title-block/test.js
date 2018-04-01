import React from 'react';
import {render} from 'enzyme';
import TextBlock from './';

const props = {
    type: 'TitleBlock',
    __typename: 'ContentfulTitleBlock',
    id: 'c6N9zQRjcjuQGyEimSw6sKy',
    title: 'Introducing Digital Garage',
    subTitle: 'Google'
};

describe('Text block component', () => {
    it('should render', () => {
        const el = render((
            <TextBlock {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
