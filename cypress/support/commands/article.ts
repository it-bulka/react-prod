import { Article } from '../../../src/entities/Article'

const defaultArticle = {
    'title': 'TEST JavaScript News',
    'subtitle': 'Latest in JavaScript for 2023',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 1022,
    'createdAt': '01.03.2023',
    'userId': '1',
    'type': [
      'IT'
    ],
    'blocks': [
      {
        'id': '1',
        'type': 'TEXT',
        'title': 'Introduction',
        'paragraphs': [
          'JavaScript continues to evolve with new features, making it a powerful tool for web developers worldwide.',
          'The latest updates in JavaScript aim to improve performance and simplify coding for developers.',
          'Stay tuned for more insights on how to leverage these new capabilities in your projects.'
        ]
      },
      {
        'id': '2',
        'type': 'CODE',
        'code': "console.log('Welcome to the new JavaScript!');"
      }
    ]
  }

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asasf' },
    body: article ?? defaultArticle,
    failOnStatusCode: false
  }).then(resp => {
    if (resp.status !== 201) {
      cy.log('Failed to create article', resp.body) // Логуємо помилку
      throw new Error(`Article creation failed: ${resp.status}`)
    }
    return resp.body
  })
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asasf' }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
