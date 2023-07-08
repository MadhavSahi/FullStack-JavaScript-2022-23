Q.2 Explain useState Hook & what can you achieve with it?

Solution--->

The useState hook is a fundamental feature of React that enables functional components to manage state. It allows you to incorporate stateful behavior into functional components without the need for class components. With the useState hook, we can achieve the following:

1. State Management: The useState hook allows you to declare state variables within a functional component. It returns an array with two elements: the current state value and a function to update that state. By invoking the update function, you can modify the state value and trigger a re-render of the component.

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

2. Multiple State Variables: You can use the useState hook multiple times in a single component to manage multiple independent state variables. Each state variable has its own associated update function, allowing you to handle different pieces of state separately.

3. Dynamic UI: By utilizing the useState hook, you can create dynamic and interactive user interfaces. State variables can store information such as user input, toggles, or any other data that needs to change over time. Modifying the state triggers a re-render, ensuring that the UI reflects the updated state.

4. Simplicity and Flexibility: The useState hook simplifies state management by removing the need for class components and the complexities of this keyword and lifecycle methods. It provides a straightforward way to introduce and manage state in functional components, promoting code simplicity and reusability.

5. Immutable State Updates: To maintain the immutability of state in React, the useState hook replaces the entire state value with the updated value when the update function is called. It's important to consider dependencies and previous state values when updating the state within the update function.
