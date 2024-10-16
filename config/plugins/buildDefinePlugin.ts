import webpack from 'webpack'

interface IDefPlugin {
  isDev: boolean
  apiUrl: string
}
export const buildDefinePlugin = ({ isDev, apiUrl }: IDefPlugin): webpack.WebpackPluginInstance => {
  return new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(apiUrl)
  })
}
