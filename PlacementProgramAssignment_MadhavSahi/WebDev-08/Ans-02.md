Q.2 What do you understand by Virtual Dom?

Solution--->

The Virtual DOM (Document Object Model) is a concept introduced by React that serves as a lightweight, virtual representation of the actual browser DOM. It acts as a middle layer between React components and the real DOM, enabling efficient rendering and updates.

1. DOM representation: The DOM is a tree-like structure that represents the HTML elements of a web page. It provides an interface to interact with and manipulate the content of the web page.

2. Virtual DOM concept: React introduces the concept of a Virtual DOM, which is a simplified, JavaScript-based copy of the actual DOM. It mimics the structure of the real DOM.

3. Reconciliation process: Whenever the state or props of a React component change, React creates a new Virtual DOM by applying the necessary updates. This process is called reconciliation.

4. Diffing algorithm: React efficiently compares the previous Virtual DOM with the new one using a diffing algorithm. It identifies the differences or changes between the two trees.

5. Minimizing DOM updates: After identifying the differences, React determines the minimum number of updates required to synchronize the real DOM with the new Virtual DOM representation. This minimizes the impact of DOM manipulation on performance.

6. Batched updates: React optimizes the update process by batching multiple updates together. Instead of immediately updating the real DOM after each change, React performs updates in batches, which reduces unnecessary reflows and repaints.

7. Advantages of Virtual DOM: The Virtual DOM approach in React allows for efficient updates by selectively updating only the necessary parts of the real DOM. It simplifies UI development by abstracting the complexities of direct DOM manipulation and provides a more declarative way to describe UI updates.
