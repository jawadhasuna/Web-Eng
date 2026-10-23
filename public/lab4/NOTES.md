# Lab 04 – Notes

## Task 10: Event loop

```js
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

### My prediction

```
1 start
4 end
3 promise
2 timeout
```

### Actual output in the DevTools Console

```
1 start
4 end
3 promise
2 timeout
```

The prediction was correct.

### Explanation

- JavaScript runs one thing at a time on the **call stack**.
- `console.log("1 start")` and `console.log("4 end")` are normal
  (synchronous) code, so they run immediately, in order, while the script is
  still on the stack.
- `setTimeout(..., 0)` does not run its callback straight away. The browser
  puts the callback in the **task queue**, even with a 0 ms delay.
- `Promise.resolve().then(...)` puts its callback in the **microtask queue**.
- When the script finishes and the call stack is empty, the **event loop**
  first empties the whole microtask queue (`3 promise`), and only then takes
  the next task from the task queue (`2 timeout`).

**Rule:** synchronous code → microtasks (promises, code after `await`) →
tasks (timers, events).
