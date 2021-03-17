const section = document.querySelector("section");
const h2 = document.createElement("h2");
h2.setAttribute("class", "title");
h2.textContent = "This is a title";
section.append(h2);
const h3 = document.querySelector("h3");
section.insertBefore(h2, h3);

section.removeChild(h3);
section.innerHTML = `
<img src="img/avatar.png" alt="avatar" />
<h1 id="brand">Dream Coding</h1>
<h3>Don't forget to code your dream</h3>
`;
