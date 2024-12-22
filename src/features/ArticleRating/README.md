# ArticleRating Feature

## Description:

Describes the entity. [See more.](#articlerating-component)

## Public API

- **Components**

`ArticleRating` - An async component that displays rating of an article. [See more about sync one.](#articlerating-component)

## ArticleRating Component

# ArticleRating Component

#### Overview

The `ArticleRating` component allows users to rate an article and leave feedback. It interacts with an API to fetch and submit article ratings. It also integrates with Redux for user authentication data and supports localization with `react-i18next`.

This component provides a skeleton loader while the rating data is being fetched and displays a rating card where users can submit their rating and feedback.

#### Props

| Name         | Type     | Description                                                                 |
|--------------|----------|-----------------------------------------------------------------------------|
| `className`  | `string` | An optional class name to apply custom styles to the component.              |
| `articleId`  | `string` | The unique identifier of the article being rated. This is required for fetching and submitting the rating. |

#### Functionalities

- **Fetching Article Rating**: The component uses `useGetArticleRating` hook to fetch the current rating of the article based on the article ID and user ID.
- **User Authentication**: It retrieves the authenticated user data using `useSelector` and `getUserAuthData` to identify the user and send their rating.
- **Rating Submission**: The component allows users to submit a rating and optional feedback using the `useRateArticle` mutation hook.
- **Skeleton Loader**: Displays a skeleton loader while waiting for the rating data to load.
- **Localization**: The component uses `useTranslation` for text localization (e.g., button titles and feedback prompts).

#### Example Usage

```tsx
import React from 'react';
import ArticleRating from './ArticleRating';

const App = () => {
  const articleId = "12345"; // example article ID

  return (
    <div>
      <h1>Article Rating</h1>
      <ArticleRating articleId={articleId} />
    </div>
  );
};

export default App;
```

#### Customization
You can pass a custom `className` to style the component.
The `articleId` is required to fetch the article's current rating and to submit a new rating

#### Error Handling
If an error occurs during the rating submission, it will be logged in the console. You may want to handle errors more gracefully, such as displaying an error message to the user.

#### Localization
The component is localized using the `react-i18next` library. 
It expects an `articles` namespace for translations such as rate the article and leave feedback for quality.





