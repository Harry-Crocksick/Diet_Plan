const links = ["Our team", "Careers", "Press", "Stores"];

const container = document.querySelector(".about-container");
const template = document.querySelector("#about");

links.forEach((link) => container.append(createLink(link)));

function createLink(link) {
  const temp = link.split(" ");
  const clone = template.content.cloneNode(true);
  const a = clone.querySelector("li > a");
  a.setAttribute("href", temp[0].toLowerCase());
  a.innerText = link;

  return clone;
}
