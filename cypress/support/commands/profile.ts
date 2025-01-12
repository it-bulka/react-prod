export const updateProfile = (firstname: string, username: string) => {
  cy.getByTestId('EditableProfilePageHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.username').clear().type(username)
  cy.getByTestId('EditableProfilePageHeader.ApplyButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      'first': 'TestUser',
      'lastname': 'TestUser',
      'age': 29,
      'currency': 'UAN',
      'country': 'Ukraine',
      'city': 'Kyiv',
      'username': 'testuser',
      'avatar': 'https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png'
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
