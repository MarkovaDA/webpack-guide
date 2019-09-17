exports.devServer = ({host, port} = {}) => ({
  devServer: {
    host,
    port,
    overlay: true,
    hotOnly: true
  }
});