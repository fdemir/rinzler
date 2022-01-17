module.exports = {
    configureWebpack: config => {
        // TODO: add contenthash suffix to it. and get it from as env variable in root-config.
        config.output.filename = 'js/[name].js'
        config.output.chunkFilename = 'js/[name].js';
    }
}