Q.3 How to pass data from one component to another component

Solution--->

Passing data from one component to another is a common requirement in React applications, and there are multiple approaches to achieve this.

1. Props: The most common way to pass data from a parent component to its child component is through props. The parent component passes data as props when rendering the child component. The child component can then access the passed data using `props`.

Example:

```jsx

function ParentComponent() {
  const data = "Hello from parent";
  return <ChildComponent message={data} />;
}

function ChildComponent(props) {
  return <p>{props.message}</p>;
}
```

2. Context API: React's Context API allows for sharing data across multiple components without explicitly passing props at each level. It involves creating a context and providing a value that can be consumed by child components.

Example:

```jsx

const MyContext = React.createContext();

function ParentComponent() {
  const data = "Hello from parent";
  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextData = React.useContext(MyContext);
  return <p>{contextData}</p>;
}
```

3. State Management Libraries: Libraries like Redux can be used for managing global application state. These libraries allow components to access and update shared state regardless of their position in the component hierarchy. State changes are handled through actions or dispatch functions provided by the state management library.

