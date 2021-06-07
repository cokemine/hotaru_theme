const resolve = d => require('path').resolve(__dirname, d);
module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'ServerStatus'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('./src/assets/img/client'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/img/client'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      });
  },
  configureWebpack: {
    externals: {
      'axios': 'axios',
    }
  }
};
