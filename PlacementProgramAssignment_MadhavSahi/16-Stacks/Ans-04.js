// Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:

// 1. Push and pop elements from the stack
// 2. Pop (Or Dequeue) from the given Queue.
// 3. Push (Or Enqueue) in the another Queue.

// **Examples :**

// Input : Queue[] = { 5, 1, 2, 3, 4 } 

// Output : Yes 

// Pop the first element of the given Queue 

// i.e 5. Push 5 into the stack. 

// Now, pop all the elements of the given Queue and push them to second Queue. 

// Now, pop element 5 in the stack and push it to the second Queue.   

// Input : Queue[] = { 5, 1, 2, 6, 3, 4 } 

// Output : No 

// Push 5 to stack. 

// Pop 1, 2 from given Queue and push it to another Queue. 

// Pop 6 from given Queue and push to stack. 

// Pop 3, 4 from given Queue and push to second Queue. 

// Now, from using any of above operation, we cannot push 5 into the second Queue because it is below the 6 in the stack.

// Solution--->
