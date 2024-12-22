import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from '../loaders/buildCSSLoader';
import { buildBabelLoader } from '../loaders/buildBabelLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgUrlCssLoader = {
    exclude: /node_modules/,
    test: /\.svg$/,
    type: 'asset/resource',
    issuer: /\.(s?)css$/,
    use: [
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { name: 'removeDoctype', active: true },
            { name: 'removeComments', active: true },
            { name: 'removeMetadata', active: true },
            { name: 'removeXMLNS', active: false },
          ]
        }
      }
    ]
  }

  const svgUrlJsxLoader = {
    exclude: /node_modules/,
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  }

  const svgComponentLoader = {
    exclude: /node_modules/,
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
    resourceQuery: { not: [/url/] }
  }

  const fileLoader = {
    exclude: /node_modules/,
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
    type: 'javascript/auto'
  };

  const cssLoader = buildCSSLoader(isDev)

  /*
  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  */

  const tsBabelLoader = buildBabelLoader({ isDev, isTsx: false })
  const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true })

  return [
    fileLoader,
    svgUrlCssLoader,
    svgUrlJsxLoader,
    svgComponentLoader,
    //typescriptLoader,
    tsBabelLoader,
    tsxBabelLoader,
    cssLoader,
  ]
}
