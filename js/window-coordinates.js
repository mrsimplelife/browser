const special = document.querySelector(".special");
special.addEventListener("click", (event) => {
  const rect = special.getBoundingClientRect();
  console.log(rect);
  console.log(`${event.clientX},${event.clientY}`);
  console.log(`${event.pageX},${event.pageY}`);
});
