let product = document.querySelector(".product");
let details = document.querySelector(".details");
let img = document.querySelector(".img");

function hovIn() {
  product.classList.add("moveLeft");
  details.classList.add("moveRight");
  details.classList.add("hov");
  img.classList.add("imgHover");
}

function hovOut() {
  product.classList.remove("moveLeft");
  details.classList.remove("moveRight");
  details.classList.remove("hov");
  img.classList.remove("imgHover");
}
