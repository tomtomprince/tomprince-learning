---
title: A Brief Introduction to Javascript Closures
date: 2019-10-28T00:58:55.296Z
description: >-
  One of the "hard parts" of JS that catches even old guys like me off guard
  some times
---
Closures in Javascript seem like black magic when you first see them. And sometimes the tenth time. Or when you just haven't had enough coffee. This article is my rough attempt at demystifying them.

Alright, so you know all about global/local contexts and variable environments and call stacks right? Great. So, consider this code:

```
let counter = 0;function incrementCounter() {}console.log(counter); // Outputs 0incrementCounter();console.log(counter); // Outputs 1
```

In the global context we have counter and incrementCounter, and that works. When incrementCounter is invoked, the JS runtime doesn't find counter in incrementCounter's local scope, so it goes to its parent, which happens to be the global context and that is updated with the incremented value.

But what if we want to have multiple counters? We'd have to at least have a new variable for each counter and add a parameter to incrementCounter. Not too terrible for small programs, but we can do better. This is where closures come in to play.

What if I told you that when you return a function from another function in JS, if the returned function references a variable in the parent function's context, a link is maintained to that context and that variable is not garbage collected like normal. Well, that's what I'm telling you. Consider this:

```
// Global Context
function createCounter() {
    let counter = 0;
    return function incrementCounter() {
        // Still has access to the context created when createCounter is invoked
        counter += 1;
        return counter;
    }
}

const incrementCounterA = createCounter();
const incrementCounterB = createCounter();
console.log(incrementCounterA()); // Outputs 1
incrementCounterA(); // Counter for A is now 2
incrementCounterB(); // Counter for B is now 1
console.log(incrementCounterA()); // Outputs 3
```
