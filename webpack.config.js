module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap',  'sass?sourceMap']
      },  
      {
        test: /\.js?$/,
        exclude: /(node_modules|dist|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};