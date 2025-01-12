let profileId = ''

describe('Opened Profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(data => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('profile should be successfully open', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'TestUser')
  })

  it('should be editable', () => {
    cy.log('profileId', profileId)
    const newName = 'new'
    const newUsername = 'username'
    cy.updateProfile(newName, newUsername)
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName)
    cy.getByTestId('ProfileCard.username').should('have.value', newUsername)
  })
})
