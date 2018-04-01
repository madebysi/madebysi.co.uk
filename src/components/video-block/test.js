import React from 'react';
import {render} from 'enzyme';
import VideoBlock from './';

const props = {
    type: 'ContentfulVideoBlock',
    __typename: 'ContentfulVideoBlock',
    id: 'Ms4H6yxOGOcUg2wYkg6iO',
    video: {
        id: 'c4ll83G1HOgoUMOagM6eu4y',
        title: '2-google',
        description: '',
        file: {
            url: '//videos.ctfassets.net/ro18aj2mntol/4ll83G1HOgoUMOagM6eu4y/b7fdd2ecdc8d2b70cb8410eaa8291247/2-google.mp4',
            fileName: '2-google.mp4',
            contentType: 'video/mp4'
        }
    },
    autoLoop: false
};

describe('Video Block component', () => {
    it('should render', () => {
        const el = render((
            <VideoBlock {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
