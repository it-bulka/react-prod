import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from '../loaders/buildCSSLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgUrlCssLoader = {
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
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  }

  const svgComponentLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
    resourceQuery: { not: [/url/] }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
    type: 'javascript/auto'
  };

  const cssLoader = buildCSSLoader(isDev)

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    fileLoader,
    svgUrlCssLoader,
    svgUrlJsxLoader,
    svgComponentLoader,
    typescriptLoader,
    cssLoader,
  ]
}
