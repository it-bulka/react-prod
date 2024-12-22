# AddCommentForm Feature

## Description:

Feature for add comment, include UI and request to server for creating comment.

____

## Public API

- **Components**

`AddCommentFormAsync` - A async component that displays comment form and making request to the server for creating comment. [See more about its sync commponent.](#addcommentform-component)

- **Types**

`AddCommentFormSchema` - A type that that provides a schema for addCommentForm reducer. <br>

____

## AddCommentForm Component

#### Overview

The `AddCommentForm` component is a form used to submit comments. It consists of an input field where users can type their comments and a button to send the comment. The component manages its internal state using Redux and integrates with the i18n system for localization. It is designed to be easily integrated into any React-based application.

#### Props

| Name             | Type          | Description                                                                 |
|------------------|---------------|-----------------------------------------------------------------------------|
| `className`      | `string`      | An optional class name that can be added to the component for custom styling. |
| `onSendComment`  | `function`    | A callback function that is called when the comment is sent. It takes the comment text as an argument. |

#### Functionalities

- **Input field**: Allows users to type a comment. The input field is localized using the `useTranslation` hook from `react-i18next`.
- **Send button**: Sends the comment and clears the input field when clicked.
- **Redux integration**: Uses Redux to manage the comment text state and update it when the user types.
- **Dynamic module loading**: Uses `DynamicModuleLoader` to load the required reducers for the form.

#### Example Usage

```tsx
import React, { useState } from 'react';
import AddCommentForm from './AddCommentForm';

const App = () => {
  const [comments, setComments] = useState<string[]>([]);

  const handleSendComment = (comment: string) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h1>Comments</h1>
      <AddCommentForm onSendComment={handleSendComment} />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

#### Customization

You can customize the component by passing a custom `className` prop for styling purposes. 
The `onSendComment` callback allows you to define how the comment data is handled when sent.

#### Localization

The component uses useTranslation from the `react-i18next` library to support multiple languages. 
The text for placeholders and buttons can be translated using the `comment` namespace









