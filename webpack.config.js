const path = require('path');
const webpack = require('webpack');

const isProduction = (process.env.NODE_ENV === 'production');

// Conditionally return a list of plugins to use based on the current environment.
// Repeat this pattern for any other config key (ie: loaders, etc).
function getPlugins() {
  let plugins = [];

  // Conditionally add plugins for Production builds.
  if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
    }));
    plugins.push(new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }));
  }

  // Conditionally add plugins for Development
  else {
    plugins.push(new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }));
  }

  return plugins;
}

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'lib/'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['airbnb'],
        },
      },
      {
        test: /\.jsx/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['airbnb'],
        },
      },
    ],
  },
  plugins: getPlugins(),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    compress: true,
    contentBase: './',
    historyApiFallback: {
      disableDotRule: true, // check for production server
    },
    port: 8000,
  },
};
