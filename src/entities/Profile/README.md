# Profile Entity

## Description:

Describes the entity.

## Public API
- **Components**

`ProfileCard` - A component that displays information about a profile.

- **Types**

`Profile` - A type that describes a profile. <br>
`ProfileSchema` - A type that provides a schema for profile reducer. <br>
`ValidateProfileError` - An enum that provides a schema possible validation profile error. <br>

- **Selectors**

`getProfileData` - A selector to retrieve information about a profile data. <br>
`getProfileReadonly` - A selector to get boolean value if profile data is just for reading or could be rewritten. <br>
`getProfileValidateErrors` - A selector to get validation error filling inputs of profile form. <br>
`getProfileError` - A selector to get error while getting profile data from server. <br>
`getProfileFormData` - A selector to retrieve filled form data of profile. <br>
`getProfileIsLoading` - A selector to retrieve info if profile data start loading from the server. <br>

- **Services**

`updateProfileData` - A async thunk for updating profile data on the server. <br>
`fetchProfileData` - A async thunk for retrieving profile data from the server. <br>

- **Reducer and actions**
  
`profileReducer` -  A reducer for profile. <br>
`profileActions` -  An action for profile. <br>



