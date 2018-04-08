import React from 'react';
import {render} from 'enzyme';
import TextBlock from './';

const props = {
    type: 'ContentfulTitleBlock',
    __typename: 'ContentfulTitleBlock',
    id: 'c6N9zQRjcjuQGyEimSw6sKy',
    title: 'Introducing Digital Garage',
    subTitle: 'Google',
    heroMedia: {
        id: 'c4ll83G1HOgoUMOagM6eu4y',
        title: '2-google',
        description: '',
        file: {
            url: '//videos.ctfassets.net/ro18aj2mntol/4ll83G1HOgoUMOagM6eu4y/b7fdd2ecdc8d2b70cb8410eaa8291247/2-google.mp4',
            fileName: '2-google.mp4',
            contentType: 'video/mp4'
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
