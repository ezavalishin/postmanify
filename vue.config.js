// const path = require('path');

module.exports = {
    css: {
        extract: false,
    },
    lintOnSave: true,
    filenameHashing: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    }
};
