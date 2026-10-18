const box = document.querySelector(".box");

box.animate(
  [{ transform: "translateX(0)" }, { transform: "translateX(100px)" }],
  {
    duration: 1000,
    fill: "forwards",
  },
);
