const path = require('path');

module.exports = {
  entry: './src/scripts/menu.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'menu.js'
  },
  
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

module.exports = {
  entry: './src/scripts/producto.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'producto.js'
  },
  
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}


