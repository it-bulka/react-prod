# AuthByUsername Feature

## Description:

This feature provides user authentication using a username and password.
Module that includes UI components, state model, services, and selectors for user authentication.

## Public API

- **Components**

`LoginModal` - A component that displays login modal. [See more](#loginmodal-component)

- **Types**

`LoginSchema` - A type that that provides a schema for login reducer. <br>

____

## Model

### Selectors

- **`getLoginError`**: Returns the authentication error.
- **`getLoginIsLoading`**: Returns the loading state during authentication.
- **`getLoginPassword`**: Returns the entered password value.
- **`getLoginUsername`**: Returns the entered username value.

### Services

- **`loginByUsername`**: An asynchronous service for authentication using a username and password.

### Slice

- **`loginSlice`**: A Redux slice that manages the authentication state.

### Types

- **`LoginSchema`**: Describes the types for the authentication model.

____

### LoginModal Component

The `LoginModal` component displays a modal dialog containing a lazy-loaded login form. It provides asynchronous functionality with a fallback loader and allows the parent component to handle login success events.

#### Properties

| Name       | Type           | Description                                                                                  | Required |
|------------|----------------|----------------------------------------------------------------------------------------------|----------|
| `className` | `string`       | Additional CSS class to style the modal.                                                    | No       |
| `isOpen`    | `boolean`      | Determines whether the modal is open or closed.                                             | Yes      |
| `onClose`   | `() => void`   | Callback function triggered when the modal is closed.                                       | Yes      |
| `onSuccess` | `() => void`   | Callback function triggered when the login process is successful.                           | Yes      |

#### Usage

###### Example

```tsx
import { LoginModal } from '@/features/LoginModal';
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLoginSuccess = () => {
    console.log('Login successful!');
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Login Modal</button>
      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onSuccess={handleLoginSuccess} 
      />
    </>
  );
};

export default ExampleComponent;
```

#### Dependencies
The LoginModal component relies on the following components:

- `Modal` - A shared UI component for displaying modals.
- `Suspense` - Used for lazy-loading with a fallback UI.
- `Loader` - Displays a loading spinner while the login form is being loaded.
- `LoginFormAsync` - The asynchronously loaded login form.  [See more](./ui/LoginForm/README.md)

#### Customization
By passing a className to the component.

#### Behavior
1) **Opening the Modal**: Pass true to the isOpen prop to display the modal.
2) **Closing the Modal**: Pass false to the isOpen prop or trigger the onClose callback to hide the modal.
3) **Handling Login Success**: Implement the onSuccess callback to execute custom logic upon successful login.

#### Notes
- Ensure your project supports dynamic imports, as `LoginFormAsync` is loaded lazily.
- The `onSuccess` callback is mandatory for post-login behavior.









