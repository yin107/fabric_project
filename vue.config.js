const { defineConfig } = require('@vue/cli-service')
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
	publicPath:process.env.NODE_ENV==='production'?'/futer':'/',
    transpileDependencies: true,
    lintOnSave: false, //是否再保存的时候使用'eslint-loader进行检查  默认为true  最好修改为false
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            // .set('network', resolve('src/network'))
            .set('views', resolve('src/views'))
    }
})