const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  vertical.style.left = `0`;
  horizontal.style.top = `0`;
  target.style.left = `0`;
  target.style.top = `0`;
  tag.style.left = `0`;
  tag.style.top = `0`;
  // vertical.style.left = `${clientX}px`;
  // horizontal.style.top = `${clientY}px`;
  // target.style.left = `${clientX}px`;
  // target.style.top = `${clientY}px`;
  // tag.style.left = `${clientX}px`;
  // tag.style.top = `${clientY}px`;
  // tag.innerHTML = `${clientX}px, ${clientY}px`;
  vertical.style.transform = `translateX(${clientX}px)`;
  horizontal.style.transform = `translateY(${clientY}px)`;
  target.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
  tag.style.transform = `translate(${clientX}px, ${clientY}px)`;
  tag.innerHTML = `${clientX}px, ${clientY}px`;
});
