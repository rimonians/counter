// App state
let count = 0;

// Select elements
const view = document.querySelector(".view h1");
const controller = document.querySelector(".controller");

controller.addEventListener("click", (e) => {
  if (e.target.className === "inc") count++;
  if (e.target.className === "reset") count = 0;
  if (e.target.className === "dec") count--;

  view.textContent = count;
});
