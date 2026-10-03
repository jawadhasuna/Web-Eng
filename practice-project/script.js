const button = document.getElementById("myButton");
const button2 = document.getElementById("myButton2");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
  message.style.color = "blue";
});
button2.addEventListener("click", function () {
  message.textContent = "Hello there!";
  message.style.color = "black";
});

