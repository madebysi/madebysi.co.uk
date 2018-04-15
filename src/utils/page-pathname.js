const formatLink = require('./format-link');

module.exports = url => {
    const slug = (url || '').replace(/\//g, '');
    const dir = !slug || slug === 'about' ? '' : '/work';
    return `${dir}${formatLink(slug)}`;
};
