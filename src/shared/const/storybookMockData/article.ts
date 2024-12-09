import { Article as IArticle, ArticleBlockType, ArticleType } from '@/entities/Article'

export const article: IArticle = {
  'id': '1',
  'title': 'Javascript news',
  'subtitle': 'JS ',
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
        'The program traditionally called "Hello, world!" is very simple. It outputs the phrase "Hello, world!" or something similar using the capabilities of a particular language.',
        'JavaScript is a language that allows programs to run in various environments. In our case, we are talking about browsers and the server platform Node.js. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.'
      ]
    }
  ],
  user: {
    id: '1',
    username: 'username'
  }
}
