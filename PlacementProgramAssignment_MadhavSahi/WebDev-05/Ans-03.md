//Q.3 Explain SetTimeOut and setInterval

//Solution--->

setTimeout():
The setTimeout() function in JavaScript allows you to schedule the execution of a function or a code snippet after a specified delay. It takes two parameters: a callback function or code snippet to execute, and a delay time in milliseconds.

setTimeout(callback, delay);

Parameters:

callback: The function or code snippet to be executed after the delay.
delay: The time delay (in milliseconds) before the execution of the callback.

setTimeout(() => {
  console.log('Delayed message');
}, 2000);


setInterval():
The setInterval() function allows you to repeatedly execute a function or a code snippet at a specified time interval. It also takes two parameters: a callback function or code snippet to execute, and an interval time in milliseconds.

Syntax:
setInterval(callback, interval);

Parameters:

callback: The function or code snippet to be repeatedly executed.
interval: The time interval (in milliseconds) between each execution of the callback.

setInterval(() => {
  console.log('Repeated message');
}, 1000);

