# User Entity

## Description:

Describes the entity.

## Public API

- **Components**

`ArticleDetails` - A component that displays information about an article.

- **Types**

`User` - A type that describes a user. <br>
`UserSchema` - A type that that provides a schema for user reducer. <br>
`UserRole` - An enum of possible user role. <br>

- **Selectors**

`getUserAuthData` - A selector to retrieve information about authorization data of the user. <br>
`getUserRoles` - A selector to retrieve information about the user roles. <br>
`isUserAdmin` - A selector to retrieve information if user is the admin. <br>
`isUserManager` - A selector to retrieve information if user is the manager. <br>

- **Reducer and actions**

`userReducers` - A reducer  for user entity. <br>
`userActions` - Actions for user entity. <br>






