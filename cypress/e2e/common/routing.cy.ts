import { selectByTestId } from '../../helpers/selectByTestId'

describe('Routing', () => {
  describe('if NOT be authorized user', () => {
    it('should go to the Home page', () => {
      cy.visit('/')
      cy.get(selectByTestId('HomePage')).should('exist')
    })

    it('open Home page instead of Profile on url - /profile/1', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('HomePage')).should('exist')
    })

    it('open NotFoundPage on unexisted url', () => {
      cy.visit('/smth-url')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('if user is authorized', () => {
    beforeEach(() => {
      cy.login()
    })
    it('open Profile page on url - /profile/1', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('open Articles Page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
