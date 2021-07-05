const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = () => {
  return merge([
    {
      mode: 'development',
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: 'development',
          },
        }),
      ],
      devServer: {
        port: 8081,
      },
    },
  ]);
};
