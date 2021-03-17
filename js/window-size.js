const tag = document.querySelector(".tag");
function update() {
  tag.innerHTML = `
    ${window.screen.width} ${window.screen.height}<br>
    ${window.outerWidth} ${window.outerHeight}<br>
    ${window.innerWidth} ${window.innerHeight}<br>
    ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}
  `;
}
update();
window.addEventListener("resize", () => {
  update();
});
