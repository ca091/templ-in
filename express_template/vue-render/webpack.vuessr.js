const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const config = {
  target: 'node',
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin(),
  ],
}

module.exports = config

/*
* 需要指定版本webpack@3.6.0
* output.filename必须
* VueLoaderPlugin必须
*/
