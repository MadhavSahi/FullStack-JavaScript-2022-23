Q.7 How do you handle conditional rendering in React?

Solution--->

Conditional rendering in React allows developers to selectively render components or elements based on certain conditions or state values. There are various approaches to handle conditional rendering in React.

1. if/else Statements:
JavaScript's if/else statements can be used within the render method of a component to conditionally render different content based on a condition.

Example:

```jsx
import React from 'react';

function MyComponent({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome, user!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}
```

2. Ternary Operator:

The ternary operator offers a concise way to conditionally render content based on a condition.

Example:

```jsx
import React from 'react';

function MyComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>}
    </div>
  );
}
```

3. Logical && Operator:

The logical `&&` operator can be used to conditionally render content when a condition is true. This approach is useful for rendering a single element or nothing at all.

Example:

```jsx
import React from 'react';

function MyComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome, user!</p>}
    </div>
  );
}
```

4. Rendering Components:

Components can be conditionally rendered by using variables or functions to determine which component to render.

Example:

```jsx
import React from 'react';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';

function MyComponent({ isLoggedIn }) {
  const ComponentToRender = isLoggedIn ? WelcomeComponent : LoginComponent;

  return <ComponentToRender />;
}
```
