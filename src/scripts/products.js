const products = [
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
    rating: 4,
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
    rating: 3.5,
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
    rating: 4.1,
  },
];

const cardsContainer = document.querySelector("#cards-container");
const template = document.querySelector("#card");

products.forEach((product) => cardsContainer.append(createCard(product)));

function createCard(product) {
  const clone = template.content.cloneNode(true);
  const image = clone.querySelector("img");
  const heading = clone.querySelector("h4");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const available = clone.querySelector(".available");
  const rating = clone.querySelector(".rating");
  const review = clone.querySelector(".review");

  image.src = product.image;
  image.setAttribute("alt", product.name);
  heading.innerText = product.name;
  description.innerText = product.description;
  price.innerText = product.price;
  available.innerText = product.available + " Available";
  rating.innerText = product.rating;
  review.innerText = product.review;

  if (product.tag) {
    const tagElem = document.createElement("div");
    tagElem.setAttribute("class", "tag");
    tagElem.className =
      "absolute top-4 right-6 text-xs font-medium bg-[#c2ccce66] px-2 py-1 rounded";
    tagElem.innerText = product.tag.toUpperCase();
    clone.querySelector("section").appendChild(tagElem);
  }

  return clone;
}
