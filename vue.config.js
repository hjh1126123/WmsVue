var path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('src',resolve('src'))
            .set('views', resolve('src/views'))
            .set('utils', resolve('src/utils'))
            .set('styles', resolve('src/styles'))
            .set('imgs', resolve('public/img'))
    }
};