const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')

const isDevMode = process.env.NODE_ENV === 'development'

/** @type {import('webpack').Configuration} */
const config = {
  name: 'main',
  mode: process.env.NODE_ENV,
  devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
  entry: {
    main: path.join(__dirname, '../src/main/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        resource: path.resolve(__dirname, '../node_modules/mime-db/db.json'),
        use: path.join(__dirname, 'mime-db-shrinking-loader.js')
      }
    ],
    generator: {
      json: {
        JSONParse: false
      }
    }
  },
  // webpack defaults to only optimising the production builds, so having this here is fine
  optimization: {
    minimizer: [
      '...', // extend webpack's list instead of overwriting it
      new JsonMinimizerPlugin({
        exclude: /\/locales\/.*\.json/
      })
    ]
  },
  node: {
    __dirname: isDevMode,
    __filename: isDevMode
  },
  plugins: [
    new webpack.DefinePlugin({
      // Baking in the build host's platform breaks cross-compilation (e.g.
      // building the Windows package on macOS): every `process.platform ===
      // 'darwin'` check would bake in as `true`, running mac-only code (like
      // `app.dock.setMenu`) on Windows and crashing the main process. Set
      // TARGET_PLATFORM to override this when cross-building.
      'process.platform': JSON.stringify(process.env.TARGET_PLATFORM || process.platform),
      'process.env.IS_ELECTRON_MAIN': true
    })
  ],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist'),
  },
  target: 'electron-main',
}

if (!isDevMode) {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../static'),
          to: path.join(__dirname, '../dist/static'),
          globOptions: {
            dot: true,
            ignore: ['**/.*', '**/locales/**', '**/dashFiles/**', '**/storyboards/**'],
          },
        },
      ]
    })
  )
}

module.exports = config
