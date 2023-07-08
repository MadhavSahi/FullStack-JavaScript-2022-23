Q.6 Explain react component life cycle 

Solution--->

ReactJS provides a set of lifecycle methods that allow developers to perform specific actions at different stages of a component's lifecycle. These methods are automatically invoked by React as the component is created, updated, or unmounted.

1. Mounting Phase:
   - `constructor()`: The constructor is the first method called when a component is instantiated. It is used to initialize the component's state and bind event handlers.
   - `render()`: The render method is responsible for returning the JSX that represents the component's UI.
   - `componentDidMount()`: This method is invoked immediately after the component is mounted to the DOM. It is commonly used for actions like fetching data from an API or setting up subscriptions.

2. Updating Phase:
   - `componentDidUpdate(prevProps, prevState)`: This method is called after the component's updates are applied to the DOM. It receives the previous props and state as arguments, allowing for comparison and additional actions based on changes.
   - `shouldComponentUpdate(nextProps, nextState)`: This method is invoked before the component is updated. It provides an opportunity to optimize performance by controlling whether the component should re-render based on changes in props or state.

3. Unmounting Phase:
   - `componentWillUnmount()`: This method is triggered just before the component is unmounted and removed from the DOM. It is used to perform any necessary cleanup tasks, such as canceling timers or unsubscribing from event listeners.

4. Error Handling Phase:
   - `componentDidCatch(error, info)`: This method is called when an error occurs during rendering, in a lifecycle method, or in the constructor of any child component. It allows developers to handle and display error messages gracefully.