const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const button = document.querySelector("button");

outer.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`outer: ${event.currentTarget}, ${event.target}`);
});
middle.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`middle ${event.currentTarget}, ${event.target}`);
});
button.addEventListener("click", (event) => {
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log(`button1 ${event.currentTarget}, ${event.target}`);
});
button.addEventListener("click", (event) => {
  // event.stopImmediatePropagation();
  console.log(`button2 ${event.currentTarget}, ${event.target}`);
});
