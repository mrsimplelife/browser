const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  vertical.style.left = `${clientX}px`;
  horizontal.style.top = `${clientY}px`;
  target.style.left = `${clientX}px`;
  target.style.top = `${clientY}px`;
  tag.style.left = `${clientX}px`;
  tag.style.top = `${clientY}px`;
  tag.innerHTML = `${clientX}px, ${clientY}px`;
});
