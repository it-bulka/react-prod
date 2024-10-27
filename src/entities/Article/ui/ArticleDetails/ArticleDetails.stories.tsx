import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Article, ArticleType, ArticleBlockType } from 'entities/Article/model/types/articles'
import { ArticleDetails } from './ArticleDetails'

export const article: Article = {
  'id': '1',
  'title': 'Javascript news',
  'subtitle': 'What is new in JS?',
  'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  'views': 1022,
  'createdAt': '26.02.2022',
  'type': [ArticleType.IT],
  'blocks': [
    {
      'id': '1',
      'type': ArticleBlockType.TEXT,
      'title': 'Title of this block',
      'paragraphs': [
        "The program traditionally called 'Hello, World!' is very simple. It outputs the phrase 'Hello, World!' or something similar using the means of a certain language.",
        'JavaScript is a language in which programs can be executed in various environments. In our case, we’re talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and you’re reading this text in a browser on a desktop computer, it means you’re literally seconds away from your first JavaScript program.',
        "There are other ways to run JS code in a browser. For example, when we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the functionality of web pages. Typically, the code is arranged in separate files with the .js extension, which are connected to web pages, but the program code can also be included directly in the page’s code. All this is done using the <script> tag. When the browser detects such code, it executes it. You can find more details about the <script> tag on the website w3school.com. Specifically, let’s consider an example demonstrating interaction with a web page using JavaScript, presented on this resource. This example can be run directly on the site (look for the 'Try it Yourself' button), but we will do things a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or Notepad++) and name it hello.html, then add the following code to it:"
      ]
    }
  ],
  'user': {
    'id': '2',
    'username': 'user',
    'avatar': 'https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png'
  }
}
const meta = {
  title: 'entities/ArticleDetails',
  args: {
    id: '1'
  },
  component: ArticleDetails,
  decorators: [StoreDecorator({state: {articleDetails: { data: article}}})]
} satisfies Meta<typeof ArticleDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
