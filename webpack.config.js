const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module {
    rules: {
      test: /\.scss$/,
      include: './src/styles/style.scss',
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  }
};
