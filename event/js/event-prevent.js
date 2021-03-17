document.addEventListener(
  "wheel",
  (event) => {
    console.log("scrolling");
    event.preventDefault();
  },
  { passive: false }
);
const checkbox = document.querySelector("input");
checkbox.addEventListener("click", (event) => {
  // long
  console.log("checked");
  event.preventDefault();
});
