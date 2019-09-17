var path = require('path');

exports.devServer = ({host, port} = {}) => ({
  devServer: {
    host,
    port,
    overlay: true,
    hot: true,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true
  }
});