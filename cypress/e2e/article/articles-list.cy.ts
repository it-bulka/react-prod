describe('Articles page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })
  it('shoud show articles list', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('should filter articles by category', () => {
    // Натискаємо на кнопку "IT"
    cy.getByTestId('Tab.IT').contains('IT').click()
    cy.getByTestId('Tab.IT').should('have.attr', 'data-selected', 'true')

    cy.wait(1000)

    cy.getByTestId('ArticleListItem').each($card => {
      cy.wrap($card).contains('IT')
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
