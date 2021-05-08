module.exports = {
  //change if true to '/waktu-solat/' if the intended domain is foo.github.io/waktu-solat
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
          args[0].title = "Waktu Solat";
          return args;
      })
  }


}