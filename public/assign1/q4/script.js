// a) Fetch API - retrieve data from a server.
document.getElementById("fetch-button").addEventListener("click", () => {
  console.log("a) Starting fetch...");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log("a) Fetch result:", data))
    .catch((error) => console.error("a) Fetch failed:", error));
});

// b) AbortController - cancel a fetch request before it finishes.
document.getElementById("abort-button").addEventListener("click", () => {
  const controller = new AbortController();

  console.log("b) Starting fetch...");
  fetch("https://jsonplaceholder.typicode.com/todos/2", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => console.log("b) Fetch result:", data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("b) Fetch was cancelled.");
      } else {
        console.error("b) Fetch failed:", error);
      }
    });

  // Cancel it immediately, before the response has a chance to arrive.
  controller.abort();
});
