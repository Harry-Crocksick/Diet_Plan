const deliveryData = [
  {
    title: "Free Delivery",
    description: "+(95) 987938524",
    image: "../../assets/car.png",
  },
  {
    title: "Message us",
    description: "www.mmsos.com",
    image: "../../assets/herb.png",
  },
  {
    title: "Located in",
    description: "Yangon, Myanmar",
    image: "../../assets/card.png",
  },
];

const deliveryCardContainer = document.querySelector("#deliveryCardContainer");
const deliveryCardTemplate = document.querySelector("#deliveryCard");

deliveryData.forEach((data) =>
  deliveryCardContainer.appendChild(createDeliveryCard(data))
);

function createDeliveryCard(data) {
  const clone = deliveryCardTemplate.content.cloneNode(true);
  const image = clone.querySelector("img");
  const heading = clone.querySelector("h4");
  const description = clone.querySelector("p");

  image.src = data.image;
  image.alt = data.title;
  heading.innerText = data.title;
  description.innerText = data.description;

  return clone;
}
