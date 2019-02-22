var path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('views', resolve('src/views'))
            .set('imgs', resolve('public/img'))
    }
};