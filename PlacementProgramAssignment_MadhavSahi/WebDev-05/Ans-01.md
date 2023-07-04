//Q.1 What’s difference between Synchronous and Asynchronous?

//Solution--->

Synchronous and asynchronous are two different programming paradigms used to handle tasks and operations in software development. Let's explore the key differences between synchronous and asynchronous approaches:

1. Synchronous:
In synchronous programming, tasks are executed sequentially, one after the other, in a blocking manner. When a synchronous task is initiated, the program waits until that task is completed before moving on to the next task. The execution flow is predictable and follows a strict order.

In this approach, if a task takes a long time to execute or gets blocked, it can significantly slow down the entire program, as subsequent tasks are held up until the current task finishes.

Example:
console.log('Task 1');
console.log('Task 2');
console.log('Task 3');

2. Asynchronous:
Asynchronous programming allows multiple tasks to be initiated without waiting for each task to complete before moving on to the next one. Instead of blocking the execution flow, asynchronous tasks are handled concurrently, and the program continues its execution without interruptions.

Asynchronous operations often involve the use of callbacks, promises, or async/await syntax to handle the completion or errors of tasks. This enables better resource utilization and responsiveness, as the program can perform other operations while waiting for the completion of asynchronous tasks.

Example:
console.log('Task 1');
setTimeout(() => {
  console.log('Task 2');
}, 2000);
console.log('Task 3');

In the above example, Task 1 is executed first, followed by Task 3. The setTimeout function is an asynchronous operation that delays the execution of Task 2 by 2000 milliseconds (2 seconds). Meanwhile, the program continues executing other tasks without waiting for the delay to complete.