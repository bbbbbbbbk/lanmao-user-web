module.exports = {
    devServer: {
        proxy: {
          '^/api': {
            target: 'https://userapi.weizispa.com',
            ws: true,
            changeOrigin: true
          }
        }
    },
    assetsDir: 'static'
}