const chefs = [
  {
    id: 1,
    image: "../../assets/chef-1.png",
    name: "David James",
    title: "Nutrition chef",
  },
  {
    id: 2,
    image: "../../assets/chef-2.png",
    name: "Ella Wendy",
    title: "Nutrition chef",
  },
  {
    id: 3,
    image: "../../assets/chef-3.png",
    name: "Robert Allen",
    title: "Nutrition chef",
  },
];

const chefsContainer = document.querySelector(".chefs-container");
const chefsTemplate = document.querySelector("#chef");

chefs.forEach((chef) => chefsContainer.append(createChefCard(chef)));

function createChefCard(chef) {
  const clone = chefsTemplate.content.cloneNode(true);
  const image = clone.querySelector("img");
  const name = clone.querySelector(".chef-name");
  const position = clone.querySelector(".position");

  image.src = chef.image;
  image.setAttribute("alt", chef.name);
  name.innerText = chef.name;
  position.innerText = chef.title;

  return clone;
}
