const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//add class dinamicly (the dot is not needed)
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

// remove
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
