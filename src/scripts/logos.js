const logos = [
  "../../assets/logo-1.png",
  "../../assets/logo-2.png",
  "../../assets/logo-3.png",
  "../../assets/logo-4.png",
];

const logosContainer = document.querySelector("#logos-container");
const logoTemplate = document.querySelector("#logo");

logos.forEach((logo) => logosContainer.append(createLogoCard(logo)));

function createLogoCard(logo) {
  const clone = logoTemplate.content.cloneNode(true);
  const image = clone.querySelector("img");

  image.src = logo;
  image.setAttribute("alt", "logo");

  return clone;
}
