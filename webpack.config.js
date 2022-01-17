// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const config = {
  entry: {
    background: './src/background.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }],
    }),
  ],
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
