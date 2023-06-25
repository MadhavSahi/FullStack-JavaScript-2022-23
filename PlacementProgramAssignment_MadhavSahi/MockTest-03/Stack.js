class CustomStack {
    constructor() {
      this.elements = [];
    }
  
    pushElement(element) {
      this.elements.push(element);
    }
  
    popElement() {
      if (this.isEmptyStack()) {
        return "Stack is empty";
      }
      return this.elements.pop();
    }
  
    isEmptyStack() {
      return this.elements.length === 0;
    }
  
    peekElement() {
      if (this.isEmptyStack()) {
        return "Stack is empty";
      }
      return this.elements[this.elements.length - 1];
    }
  
    getStackSize() {
      return this.elements.length;
    }
  
    printStackElements() {
      console.log(this.elements);
    }
  }
  
  const stack = new CustomStack();
  
  stack.pushElement(10);
  stack.pushElement(20);
  stack.pushElement(30);
  
  console.log(stack.peekElement()); 
  // Output: 30
  
  stack.popElement();
  console.log(stack.peekElement()); 
  // Output: 20
  
  console.log(stack.isEmptyStack()); 
  // Output: false
  
  console.log(stack.getStackSize()); 
  // Output: 2
  
  stack.printStackElements(); 
  // Output: [10, 20]
  