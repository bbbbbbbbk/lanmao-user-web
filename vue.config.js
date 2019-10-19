module.exports = {
    devServer: {
        proxy: {
          '^/api': {
            target: 'http://47.105.132.129:8093',
            ws: true,
            changeOrigin: true
          }
        }
    },
    assetsDir: 'static'
}