import confetti from "canvas-confetti";

console.log("Removed out.js");
console.log("Is it watching?");
let heading = document.querySelector("h1");
heading.textContent = "This is a new h1";

var myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});
myConfetti({
  particleCount: 300,
  spread: 160,
  // any other options from the global
  // confetti function
});
