// esbuild-jest.js
const esbuild = require('esbuild');

module.exports = {
    process(src, filename, options) {
        const result = esbuild.transformSync(src, {
            loader: 'jsx',
            target: 'es6',
            sourcefile: filename,
            sourcemap: 'external',
            jsxFactory: options.globals['React'] || 'React.createElement',
            jsxFragment: options.globals['Fragment'] || 'React.Fragment',
        });

        return {
            code: result.code,
            map: result.map,
        };
    },
};
