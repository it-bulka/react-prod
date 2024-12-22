import { babelRemovePropsPlugin } from '../babel/babelRemovePropsPlugin'
import { BuildOptions } from '../build/types/config'

interface BuildBabelLoaderProps extends Pick<BuildOptions, 'isDev'> {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx, isDev }: BuildBabelLoaderProps) => {
  const isProd = !isDev
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          ['@babel/preset-env']
        ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['uk', 'en'],
              keyAsDefaultValue: true
            }
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          [
            '@babel/plugin-transform-runtime',
            {
              'absoluteRuntime': false,
              'helpers': true,
              'regenerator': true
            }
          ],
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid']
            }
          ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  }
}
