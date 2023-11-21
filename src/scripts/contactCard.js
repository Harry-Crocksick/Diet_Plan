const contacts = [
  {
    title: "Call Anytime",
    address: "+(95)987938524",
    image: "../assets/post-office.png",
  },
  {
    title: "Message us",
    address: "www.mmsit.com",
    image: "../assets/letter.png",
  },
  {
    title: "Located in",
    address: "Yangon, Myanmar",
    image: "../assets/globe.png",
  },
];

const contactCardContainer = document.querySelector("#contactCardContainer");
const contactCardTemplate = document.querySelector("#contactCard");

contacts.forEach((contact) =>
  contactCardContainer.append(createContactCard(contact))
);

function createContactCard(contact) {
  const clone = contactCardTemplate.content.cloneNode(true);
  const title = clone.querySelector("h2");
  const address = clone.querySelector("p");
  const image = clone.querySelector("img");

  title.innerText = contact.title;
  address.innerText = contact.address;
  image.src = contact.image;
  image.setAttribute("alt", contact.title);

  return clone;
}
