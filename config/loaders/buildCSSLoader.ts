import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCSSLoader = (isDev: boolean) => {
  return {
    exclude: /node_modules/,
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          /* esModule & namedExport  to import named css-files and have object, not undefined */
          esModule: false,
          modules: {
            // namedExport: false,
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: `@import '@/app/styles/basic/_mixins.scss';`
        }
      }
    ]
  }
}
