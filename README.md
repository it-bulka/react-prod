## Start project

- `npm install --legacy-peer-deps` - install dependencies (`--legacy-peer-deps` is needed for some package for storybook) <br>
- `npm run start:dev` or `npm run start:dev:vite` - run server + frontend project in dev mood
----

## Scripts

- `npm run serve` - Run frontend project on **webpack** dev server
- `npm run start:vite` - Run frontend project on **vite**
- `npm run start:dev` - Run frontend project on **webpack** dev server + backend
- `npm run start:dev:vite` - Run frontend project on **vite** + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build` - Run in **prod mood**
- `npm run dev` - Dev Build (not minimized)
- `npm run lint` - Check ts files with **linter**
- `npm run lint:fix` - Fixing ts files with linter
- `npm run lint:scss` - Check scss files style with linter
- `npm run lint:scss:fix` - Fixing scss files style with linter
- `npm run test:unit` - Run unit tests with **jest**
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build storybook 
- `npm run prepare` - Precommit hooks
- `npm run generate:slice` - Script for generate FSD sliced (after it need to add at first name of `layer` and then `slice`, e.g. `npm run generate:slice page about`. Not include `shared` layer for generation)

----

## Project Architecture

The project is written according to the Feature Sliced Design methodology.

Link to the documentation. - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations
The project uses the i18next library for handling translations.
Translation files are stored in `public/locales`.

For a better experience, we recommend installing the plugin for WebStorm/VSCode.

i18next documentation. - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 3 types of tests:
1) Regular unit tests with Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) E2E testing with Cypress - `npm run test:e2e`

More about - [Test documentation](/docs/tests.md)

----

## Linting

The project uses ESLint to check TypeScript code and Stylelint to check style files.

Additionally, for strict control of the main architectural principles, a custom ESLint plugin `eslint-plugin-fsd-checker-gen` is used, which contains 3 rules:

- `path-checker` - prohibits the use of absolute imports within a single module.
- `layer-imports` - checks the correct usage of layers from the FSD perspective (e.g., widgets cannot be used in features and entities).
- `public-api-imports` - allows imports from other modules only from the public API. It has auto-fix.

____

## Running Linters
- `npm run lint` - Check ts files with the linter
- `npm run lint:fix` - Fix ts files with the linter
- `npm run lint:scss` - Check SCSS files with the style linter
- `npm run lint:scss:fix` - Fix SCSS files with the style linter

----

## Storybook

In the project, story cases are described for each component.

Server requests are mocked using `msw-storybook-addon`.<br>
React router is mock with  `storybook-addon-react-router-v6` (need ***--legacy-peer-deps*** for inside package - ***@storybook/blocks***)

The file with story cases is created next to the component with the ***.stories.tsx*** extension.

You can run Storybook with the command: 
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'

import { PositionDecorator, DECORATOR_POSITION } from '@/shared/config/storybook'

import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    children: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY, AppLinkTheme.RED],
      defaultOptions: [AppLinkTheme.PRIMARY]
    },
    onClick: { action: 'click' }
  },
  args: {
    to: '/',
    children: 'Link'
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}
export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}
export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED
  }
}

```

----

## Project Configuration
For development, the project contains two configurations:

Webpack - ***./config/build*** <br>
Vite - ***vite.config.ts*** <br>
Both bundlers are adapted for the main features of the application.

All configurations are stored in ***/config***:

***/config/babel*** - babel configuration <br>
***/config/build*** - webpack configuration <br>
***/config/jest*** - test environment configuration <br>
***/config/storybook*** - storybook configuration <br>

The scripts folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

____

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in ***/.github/workflows***. The CI pipeline runs all types of tests, project and storybook builds, and linting.

In the pre-commit hooks, we check the project with linters, and the configuration is in ***/.husky***.

____

## Working with Data

Data interaction is done using ***Redux Toolkit***.  <br>
Reusable entities should be normalized with ***EntityAdapter*** whenever possible.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts).

For asynchronously loading reducers (to avoid bundling them in the main bundle), 
we use [DynamicModuleLoader](/src/shared/libs/components/DynamicModalLoader.ts).

____

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/widgets/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
