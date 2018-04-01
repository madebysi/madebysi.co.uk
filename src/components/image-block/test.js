import React from 'react';
import {render} from 'enzyme';
import ImageHeader from './';

const props = {
    type: 'ImageHeader',
    id: 'c2WRhQeeGyIWkY4OmaIG2oA',
    title: 'We’re here to build a new piggy bank, blockchain first, inherently digital.',
    image: {
        id: 'c6a87u77d7OA84MSkc2qiuQ',
        title: '1280x640',
        description: '',
        resolutions: {
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAAAAACRPiE6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gMBAAEqquT1CwAAAChJREFUCNdjOIMFMFBD8PTBffuPnjhw6CCKyv179hw5uGfffipahAYAFfqeo4iQyXAAAAAASUVORK5CYII=',
            aspectRatio: 2,
            width: 400,
            height: 200,
            src: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&q=50',
            srcSet: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&h=200&q=50 1x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=600&h=300&q=50 1.5x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&h=400&q=50 2x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1200&h=600&q=50 3x',
            srcWebp: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&q=50&fm=webp',
            srcSetWebp: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&h=200&q=50&fm=webp 1x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=600&h=300&q=50&fm=webp 1.5x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&h=400&q=50&fm=webp 2x,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1200&h=600&q=50&fm=webp 3x'
        },
        file: {
            url: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png',
            fileName: '1280x640.png',
            contentType: 'image/png'
        },
        sizes: {
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAAAAACRPiE6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gMBAAEqquT1CwAAAChJREFUCNdjOIMFMFBD8PTBffuPnjhw6CCKyv179hw5uGfffipahAYAFfqeo4iQyXAAAAAASUVORK5CYII=',
            aspectRatio: 2,
            src: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&q=50&fm=webp',
            srcSet: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=200&h=100&q=50&fm=webp 200w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&h=200&q=50&fm=webp 400w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&h=400&q=50&fm=webp 800w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1200&h=600&q=50&fm=webp 1200w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1280&h=640&q=50&fm=webp 1280w',
            srcWebp: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&q=50&fm=webp',
            srcSetWebp: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=200&h=100&q=50&fm=webp 200w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&h=200&q=50&fm=webp 400w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=800&h=400&q=50&fm=webp 800w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1200&h=600&q=50&fm=webp 1200w,\n//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=1280&h=640&q=50&fm=webp 1280w',
            sizes: '(max-width: 800px) 100vw, 800px'
        },
        resize: {
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAAAAACRPiE6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gMBAAEqquT1CwAAAChJREFUCNdjOIMFMFBD8PTBffuPnjhw6CCKyv179hw5uGfffipahAYAFfqeo4iQyXAAAAAASUVORK5CYII=',
            src: '//images.contentful.com/s4q9xedygljx/6a87u77d7OA84MSkc2qiuQ/31ca7c6bcc72aa37f6ba09d4fe2c5aaf/1280x640.png?w=400&fl=progressive&q=50',
            width: 400,
            height: 200,
            aspectRatio: 2
        }
    }
};

describe('Image header component', () => {
    it('should render', () => {
        const el = render((
            <ImageHeader {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
