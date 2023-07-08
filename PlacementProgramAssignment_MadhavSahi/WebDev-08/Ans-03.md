Q.3 Difference between Virtual Dom vs Real Dom

Solution--->

Virtual DOM:

1. Representation: The Virtual DOM is an in-memory representation of the DOM created by React.
2. Structure: It is a lightweight JavaScript object that mimics the structure of the real DOM.
3. Manipulation: Updates to the Virtual DOM are done in JavaScript and are more efficient than direct manipulation of the real DOM.
4. Diffing: The Virtual DOM employs a diffing algorithm to identify the minimal set of changes needed to update the real DOM.
5. Performance: The use of the Virtual DOM minimizes the number of actual DOM manipulations, resulting in improved performance compared to direct manipulation of the real DOM.
6. Batched Updates: React performs batched updates with the Virtual DOM, optimizing the process and reducing unnecessary reflows and repaints.

Real DOM:

1. Representation: The real DOM is the actual browser representation of the HTML elements.
2. Structure: It is a complex tree-like structure that includes every element, attribute, and text node.
3. Manipulation: Direct manipulation of the real DOM involves using browser APIs to interact with and modify the DOM.
4. Diffing: The real DOM lacks a built-in diffing mechanism, so each update directly affects the rendered elements.
5. Performance: Direct manipulation of the real DOM can be less performant, as each change triggers reflows and repaints, which can be resource-intensive.
6. Synchronous Updates: Changes made to the real DOM are immediately rendered, potentially impacting performance when multiple updates occur in quick succession.
