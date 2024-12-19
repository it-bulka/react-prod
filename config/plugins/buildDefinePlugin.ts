import webpack from 'webpack'

import { ProjectEnv } from '../types'

interface IDefPlugin {
  isDev: boolean
  apiUrl: string
  projectEnv: ProjectEnv
}

export const buildDefinePlugin = ({
  isDev,
  apiUrl,
  projectEnv
}: IDefPlugin): webpack.WebpackPluginInstance => {
  return new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(apiUrl),
    __PROJECT_ENV__: JSON.stringify(projectEnv)
  })
}
