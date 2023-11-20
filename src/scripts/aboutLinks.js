const aboutLinks = ["Our team", "Careers", "Press", "Stores"];

const aboutContainer = document.querySelector(".about-container");
const aboutTemplate = document.querySelector("#about");

aboutLinks.forEach((link) => aboutContainer.append(createLink(link)));

function createLink(link) {
  const temp = link.split(" ");
  const clone = aboutTemplate.content.cloneNode(true);
  const a = clone.querySelector("li > a");
  a.setAttribute("href", temp[0].toLowerCase());
  a.innerText = link;

  return clone;
}
