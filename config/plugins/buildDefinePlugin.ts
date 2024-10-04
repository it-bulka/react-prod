import webpack from 'webpack'

export const buildDefinePlugin = (isDev: boolean): webpack.WebpackPluginInstance => {
  return new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev)
  })
}
