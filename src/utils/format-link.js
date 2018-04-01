export default slug => `/${slug || ''}/`.replace(/\/+/g, '/');
