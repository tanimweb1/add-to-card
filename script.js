const product = [
  {
    id: 0,
    image: "./image1.jpg",
    title: "samsung",
    price: 120,
  },
  {
    id: 2,
    image: "./ccc.jpg",
    title: "samsung",
    price: 120,
  },
  {
    id: 3,
    image: "./aaa.jpg",
    title: "samsung",
    price: 120,
  },
  {
    id: 4,
    image: "bbb.jpg",
    title: "samsung",
    price: 120,
  },
];

let i = 0;

product.forEach((item) => {
  document.getElementById("root").innerHTML += `<div class='box'>
        <div class='img-box'>
        <img class='images w-24 ' src="${item.image}"/>
        </div> <div class='bottom'>
        <p>${item.title}</p>
        <h2>$ ${item.price}.00</h2></div></div>`;
});
