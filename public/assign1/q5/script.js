// b) Always check browser support before using a new API.
const supportStatus = document.getElementById("support-status");

if ("navigation" in window) {
  supportStatus.textContent = "Navigation API is supported in this browser.";

  // a) Intercept navigations and handle them manually, instead of a
  // full page reload.
  navigation.addEventListener("navigate", (event) => {
    event.intercept({
      handler: async () => {
        const url = new URL(event.destination.url);
        console.log("Navigating to:", url.hash);
        document.getElementById("output").textContent =
          "Intercepted navigation to: " + url.hash;
      },
    });
  });
} else {
  supportStatus.textContent =
    "Navigation API is NOT supported in this browser " +
    "(try Chrome or Edge) - falling back to normal link behaviour.";
}
