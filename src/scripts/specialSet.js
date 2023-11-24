const productCardData = [
  {
    id: "1",
    name: "Special Set",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$100",
    available: "+110",
    image: "../../assets/image-1.png",
    tag: "hot items",
    review: 10,
    rating: 1.9,
  },
  {
    id: "2",
    name: "Healthy Salad",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$50",
    available: "+70",
    image: "../../assets/image-2.png",
    review: 15,
    rating: 2.5,
  },
  {
    id: "3",
    name: "Korean Set",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$150",
    available: "+90",
    image: "../../assets/image-6.png",
    tag: "new items",
    review: 25,
    rating: 4.2,
  },
  {
    id: "4",
    name: "Healthy Salad",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$50",
    available: "+70",
    image: "../../assets/image-7.png",
    review: 15,
    rating: 0.5,
  },
  {
    id: "6",
    name: "Korean Set",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$150",
    available: "+90",
    image: "../../assets/image-6.png",
    tag: "new items",
    review: 25,
    rating: 4,
  },
  {
    id: "5",
    name: "Special Set",
    description:
      "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: "$100",
    available: "+110",
    image: "../../assets/image-1.png",
    tag: "hot items",
    review: 10,
    rating: 2.9,
  },
];

const halfStarSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="fill-yellow-400 w-5 h-5 stroke-yellow-400" viewBox="0 0 640 512">
      <path d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"/>
    </svg>
  `;
const emptyStarSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-yellow-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  `;
const fullStarSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-yellow-400 w-5 h-5 stroke-yellow-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  `;

const productCardsContainer = document.querySelector("#productCardsContainer");
const productFoodCardTemplate = document.querySelector("#productFoodCard");

productCardData.forEach((product) =>
  productCardsContainer.append(
    createSpecialSetCard(product, productFoodCardTemplate)
  )
);

function createSpecialSetCard(product, template) {
  const clone = template.content.cloneNode(true);
  const image = clone.querySelector("img");
  const heading = clone.querySelector("h4");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const available = clone.querySelector(".available");
  const scores = clone.querySelector(".audience-score");
  const stars = clone.querySelector(".stars");

  image.src = product.image;
  image.setAttribute("alt", product.name);
  heading.innerText = product.name;
  description.innerText = product.description;
  price.innerText = product.price;
  available.innerText = product.available + " Available";
  scores.innerText = `( ${product.rating} ) | ${product.review} ${
    product.review > 1 ? "Reviews" : "Review"
  }`;
  stars.innerHTML = star(product.rating);

  if (product.tag) {
    const tagElem = document.createElement("div");
    tagElem.setAttribute("class", "");
    tagElem.className =
      "absolute top-4 right-6 text-xs font-medium bg-[#c2ccce66] px-2 py-1 rounded";
    tagElem.innerText = product.tag.toUpperCase();
    clone.querySelector("section").appendChild(tagElem);
  }
  return clone;
}

function star(rating) {
  let starsArray = new Array();
  let starList = "";
  for (let x = 0; x < 5; x++) {
    if (x + 1 <= Math.round(rating)) {
      starsArray.push(fullStarSvg);
    } else {
      starsArray.push(emptyStarSvg);
    }
  }
  if (rating === Math.floor(rating) + 0.5) {
    starsArray[Math.floor(rating)] = starsArray[Math.floor(rating)].replace(
      fullStarSvg,
      halfStarSvg
    );
  }
  starList = starsArray.join(" ");
  return starList;
}
