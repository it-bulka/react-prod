import path from 'path';
import type { StorybookConfig } from "@storybook/react-webpack5";
import { BuildPaths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { buildCSSLoader } from '../loaders/buildCSSLoader';
import { buildDefinePlugin } from '../plugins/buildDefinePlugin';

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ['../../public'],
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: async (config: webpack.Configuration) => {
    // reconfig for absolute path
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: ''
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config.module && config.module.rules) {
     config.module.rules = (config.module.rules as RuleSetRule[]).map((rule) => {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });

       config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      config.module.rules.push(buildCSSLoader(true))
    }

    const isDev = process.env.NODE_ENV !== 'production'
    config.plugins?.push(buildDefinePlugin({ isDev, apiUrl: '', projectEnv: 'storybook' }));

    return config
  },
};
export default config;
