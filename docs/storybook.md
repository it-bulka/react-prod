## Storybook

In the project, story cases are described for each component.

Server requests are mocked using `msw-storybook-addon`.<br>
React router is mock with  `storybook-addon-react-router-v6` (need ***--legacy-peer-deps*** for inside package - ***@storybook/blocks***)

The file with story cases is created next to the component with the ***.stories.tsx*** extension.

You can run Storybook with the command:
- `npm run storybook`

Examlpes:
- [Simple Example](#simple-example)
- [Example with mocking router](#example-with-mocking-router)
- [Example with mocking server request](#example-with-mocking-server-request)

##### Simple example

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

##### Example with mocking router

- use property `parameters.reactRouter` 

```ts jsx
import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { article } from '@/shared/const/storybookMockData'

import ArticleDetailsPage from './ArticleDetailsPage'

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [
    StoreDecorator({
     state: {
          articleDetails: {
            data: article
          }
        }
    })
  ]
} satisfies Meta<typeof ArticleDetailsPage>

export default meta

type Story = StoryObj<typeof meta>

export const WithArticleIdFounded: Story = {
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: { id: '1' }
    }
  }
}

export const WithArticleIdNotFounded: Story = {}

```

##### Example with mocking server request:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

import ArticleRating from './ArticleRating'
import { feedback } from '../../const/storybookMockData'

const meta = {
  title: 'features/ArticleRating',
  args: {
    articleId: '1'
  },
  component: ArticleRating,
  decorators: [
    StoreDecorator({}),

    Story => {
      return <Story />
    }
  ]
} satisfies Meta<typeof ArticleRating>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/article-ratings`, () => {
          return HttpResponse.json(
            new Array(5)
              .fill(feedback)
              .map((item, index) => ({...item, id: index}))
          )
        })
      ]
    }
  }
}

export const FailedBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/article-ratings`, () => {
          return HttpResponse.json(null, { status: 403 })
        })
      ]
    }
  }
}

```