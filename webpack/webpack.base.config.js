const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return merge([
    {
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
    },
  ]);
};
