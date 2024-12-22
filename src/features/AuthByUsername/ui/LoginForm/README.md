## LoginFormAsync Component

The `LoginFormAsync` component is a lazy-loaded wrapper for the `LoginForm` component. It uses React's `lazy` API to load the login form dynamically, reducing the initial bundle size.

---

### Properties

The `LoginFormAsync` component accepts the same props as the `LoginForm` component.

### LoginFormProps

| Name       | Type                    | Description                                           | Required |
|------------|-------------------------|-------------------------------------------------------|----------|
| `onSuccess` | `() => void`           | Callback function triggered when the login is successful. | Yes      |
| `withFocus` | `boolean`              | Determines if the form's first input field should be focused. | No       |

*Note*: These properties are passed to the underlying `LoginForm` component.

### Dependencies
The LoginFormAsync component relies on:

React.lazy: Used to dynamically import the LoginForm component.
React.Suspense: Wraps LoginFormAsync to display a fallback UI while the form is being loaded.

### Behavior
- **Lazy Loading**: The LoginForm component is only loaded when LoginFormAsync is rendered.
- **Fallback**: A fallback UI must be provided via Suspense for smooth user experience during the loading phase.

### Notes
- Ensure your project supports dynamic imports for lazy loading.
- Always wrap LoginFormAsync in a Suspense component to provide a fallback while the component loads.
- The LoginFormAsync component is especially useful in scenarios where login functionality is infrequently accessed, optimizing the initial bundle size.