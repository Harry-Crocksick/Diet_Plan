const productLinks = ["How it works", "Features", "Pricing", "Testimonials"];

const productContainer = document.querySelector(".product-container");
const productTemplate = document.querySelector("#product");

productLinks.forEach((link) => productContainer.append(createLink(link)));

function createLink(link) {
  const temp = link.split(" ");
  const clone = productTemplate.content.cloneNode(true);
  const a = clone.querySelector("li > a");
  a.setAttribute("href", temp[0].toLowerCase());
  a.innerText = link;

  return clone;
}
