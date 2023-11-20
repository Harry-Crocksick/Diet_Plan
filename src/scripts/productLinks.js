const links = ["How it works", "Features", "Pricing", "Testimonials"];

const container = document.querySelector(".product-container");
const template = document.querySelector("#product");

links.forEach((link) => container.append(createLink(link)));

function createLink(link) {
  const temp = link.split(" ");
  const clone = template.content.cloneNode(true);
  const a = clone.querySelector("li > a");
  a.setAttribute("href", temp[0].toLowerCase());
  a.innerText = link;

  return clone;
}
