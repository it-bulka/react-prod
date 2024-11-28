import { BuildOptions } from '../build/types/config'
import { babelRemovePropsPlugin } from '../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps extends Pick<BuildOptions, 'isDev'> {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx, isDev }: BuildBabelLoaderProps) => {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
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
          isTsx && [
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
