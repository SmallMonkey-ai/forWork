module.exports = {
    devServer: {
        proxy: {
          '/sand': {
            // target: 'http://192.168.10.124:80/sand',
            target: 'http://192.168.10.170:80/sand',
            // target: 'http://image.limadcw.com:8040/sand',
            // target: 'http://internal.limadcw.com:80/sand',
            changeOrigin: true,
            pathRewrite:{
                '^/sand':''
            }
          }
        }
      },
      publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
    }
  