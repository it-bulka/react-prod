describe('Articles page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })
  it('should show articles list', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('should show articles list (fixtures)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it.only('should filter articles by category', () => {
    // Натискаємо на кнопку "IT"
    cy.getByTestId('Tab.IT').contains('IT').click()
    cy.getByTestId('Tab.IT').should('have.attr', 'data-selected', 'true')

    cy.getByTestId('ArticleListItem').each($card => {
      cy.wrap($card).find('[data-testid="ArticleListItem.Type.Paragraph"]').should('contain.text', 'IT')
    })
  })

  it('should search articles by keyword', () => {
    cy.intercept('GET', 'http://localhost:8000/articles?*').as('searchRequest')
    cy.wait('@searchRequest').its('request.url').should('include', 'q=')
    cy.getByTestId('ArticlesPageFilters.search').type('TEST')
    cy.wait('@searchRequest').its('request.url').should('include', 'q=TEST')
    // Card is not checked. Not all bd text is shown on card
  })
})
