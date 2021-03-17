const special = document.querySelector(".special");
special.addEventListener("click", (event) => {
  const rect = special.getBoundingClientRect();
  console.log(rect);
  console.log(`${event.clientX},${event.clientY}`);
  console.log(`${event.pageX},${event.pageY}`);
});

const scrollBy = document.querySelector(".scroll-by");
const scrollTo = document.querySelector(".scroll-to");
const scrollInto = document.querySelector(".scroll-into");
scrollBy.addEventListener("click", () => {
  window.scrollBy({
    behavior: "smooth",
    left: 0,
    top: 100,
  });
});
scrollTo.addEventListener("click", () => {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: 100,
  });
});
scrollInto.addEventListener("click", () => {
  special.scrollIntoView({ behavior: "smooth", block: "center" });
});
