let currentArticleId = ''

describe('Article page for authorized user', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then(article => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('should see article details', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it('should see recommendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('should have possibility to add comment', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('should rate article', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
