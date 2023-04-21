let words = document.querySelectorAll(".animation-text span");
let title = document.querySelector(".welcome-text");

let property = {
  transform: "translateY(0)",
  opacity: 1,
};

title.animate(property, {
  duration: 300,
  fill: "forwards",
});
let delay = 500;
words.forEach((word) => {
  word.animate(property, {
    duration: 600,
    delay: delay,
    fill: "forwards",
    easing: "ease-out",
  });
  delay += 50;
});
