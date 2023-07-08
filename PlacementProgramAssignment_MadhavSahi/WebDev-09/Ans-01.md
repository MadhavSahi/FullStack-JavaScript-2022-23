Q.1 What are hooks in react? how to identify hooks?

Solution--->

Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components without relying on class components. They provide a way to manage state, handle side effects, and access React's lifecycle methods within functional components.

useState Hook:

The `useState` hook allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that state value. By invoking this function, the component triggers a re-render and updates the state.

Example usage of the useState hook:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

useEffect Hook:

The `useEffect` hook enables functional components to handle side effects. It accepts a callback function as its first argument, which runs after every render. This callback function can perform tasks such as data fetching, event subscriptions, or DOM manipulations.

Example usage of the useEffect hook:

```jsx
import React, { useEffect } from 'react';

function DataFetching() {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Data fetching example</div>;
}
```

Custom Hooks:

Developers can create custom hooks to encapsulate reusable logic. Custom hooks are regular JavaScript functions that use built-in hooks or other custom hooks. To be recognized as hooks, custom hooks must start with the prefix "use."

Example of a custom hook:

```jsx
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}
```
