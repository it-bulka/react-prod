# ArticleRecommendationsList Feature

## Description:
This component is intended to be used in scenarios where a list of recommended articles should be shown to the user. It is flexible and can be easily integrated with different styles or layouts.
[Description of the feature](#articleRecommendationsList-component).

## Public API

- **Components**

`ArticleRecommendationsList` - A component that displays list of recommended articles.

## ArticleRecommendationsList Component

#### Overview

The `ArticleRecommendationsList` component is designed to display a list of recommended articles. It fetches a list of article recommendations from an API and renders them using the `ArticleList` component. This component also displays a title ("Recommendations") and shows the list of articles in a vertically stacked layout.

If there is an error or no articles are available, the component renders nothing.

## Props

| Name        | Type     | Description                                                                 |
|-------------|----------|-----------------------------------------------------------------------------|
| `className` | `string` | Optional custom class name for additional styling.                          |

## Functionalities

- **Fetching Recommendations**: The component fetches a list of article recommendations using the `useGetArticleRecommendationsListQuery` hook.
- **Loading State**: Displays a loading state while articles are being fetched.
- **Error Handling**: If an error occurs during fetching, the component will render nothing.
- **Article List**: Displays the recommended articles using the `ArticleList` component.
- **Translation Support**: Uses `react-i18next` for translation of the title ("Recommendations").

## Example Usage

```tsx
import React from 'react';
import ArticleRecommendationsList from './ArticleRecommendationsList';

const App = () => {
  return (
    <div>
      <h1>Article Recommendations</h1>
      <ArticleRecommendationsList className="custom-class" />
    </div>
  );
};

export default App;
```

#### Customization
You can pass a custom `className` to apply additional styles to the component. <br>
The number of recommendations fetched is currently set to **3**, but this could be modified by adjusting the API query parameters if needed.

#### Error Handling
If the `useGetArticleRecommendationsListQuery` hook encounters an error or if no articles are returned, 
the component simply returns `null`, and no UI is displayed.

#### Localization
The component uses `react-i18next` for localization. 
It expects the `articles namespace` in `public/local` to have a translation key for recommendations, which is displayed as the title of the component.

File **article.json** example:
```json 
{
  "recommendations": "Recommendations"
}
```

#### Styling
- The component's layout is controlled using the `VStack` component from the shared UI library, which arranges the children elements vertically.
- The `className` prop allows you to apply custom styles to the component.
- The `ArticleList` component receives a custom class name `cls.recommendations` for styling.








