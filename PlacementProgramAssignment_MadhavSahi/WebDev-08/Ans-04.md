Q.4 Whats component? Types of component

Solution--->

In ReactJS, a component is a reusable and self-contained unit that encapsulates the UI and its behavior. Components serve as the building blocks of React applications, enabling developers to create modular, reusable, and maintainable code.

ReactJS have 2 types of components:

1. Function Components:
Function components, also known as stateless components or presentational components, are defined as JavaScript functions. These functions accept props (short for properties) as input and return JSX (JavaScript XML) to define the UI. Function components are ideal for simpler UI elements that don't require state or lifecycle methods. They are easy to write, understand, and promote code reusability.

Example of a function component:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

2. Class Components:
Class components, also known as stateful components or container components, are defined as ES6 classes that extend the `React.Component` class. Class components have their own internal state and can utilize lifecycle methods to manage state changes and perform actions at specific points in the component's lifecycle. They are suitable for more complex UI elements that require state management and advanced logic.

Example of a class component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```
