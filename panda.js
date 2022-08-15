//shoes random image
let shoes = document.getElementById("shoe-one");
shoes.addEventListener("mouseout", function () {
  shoes.src = "images/shoes/shoe-1.png";
});
let shoes1 = document.getElementById("shoe-one");
shoes1.addEventListener("mouseover", function () {
  shoes1.src = "images/shoes/shoe-2.png";
});
//shoes card two
let shoes2 = document.getElementById("shoe-two");
shoes2.addEventListener("mouseout", function () {
  shoes2.src = "images/shoes/shoe-2.png";
});
let shoesTwo = document.getElementById("shoe-two");
shoesTwo.addEventListener("mouseover", function () {
  shoesTwo.src = "images/shoes/shoe-3.png";
});
//card three
let shoes3 = document.getElementById("shoe-three");
shoes3.addEventListener("mouseout", function () {
  shoes3.src = "images/shoes/shoe-3.png";
});
let shoesThree = document.getElementById("shoe-three");
shoesThree.addEventListener("mouseover", function () {
  shoesThree.src = "images/shoes/shoe-1.png";
});
//remove btn
let btn1 = document.getElementById("buy-now-1");
btn1.addEventListener("click", function () {
  btn1.style.display = "none";
});
let btn2 = document.getElementById("buy-now-2");
btn2.addEventListener("click", function () {
  btn2.style.display = "none";
});
let btn3 = document.getElementById("buy-now-3");
btn3.addEventListener("click", function () {
  btn3.style.display = "none";
});

//bags random image
//card one
let bag = document.getElementById("bag-one");
bag.addEventListener("mouseout", function () {
  bag.src = "images/bags/bag-1.png";
});
let bagOne = document.getElementById("bag-one");
bagOne.addEventListener("mouseover", function () {
  bagOne.src = "images/bags/bag-2.png";
});
//card two
let bag1 = document.getElementById("bag-two");
bag1.addEventListener("mouseout", function () {
  bag1.src = "images/bags/bag-2.png";
});
let bagTwo = document.getElementById("bag-two");
bagTwo.addEventListener("mouseover", function () {
  bagTwo.src = "images/bags/bag-3.png";
});
//card three
let bag2 = document.getElementById("bag-three");
bag2.addEventListener("mouseout", function () {
  bag2.src = "images/bags/bag-3.png";
});
let bagThree = document.getElementById("bag-three");
bagThree.addEventListener("mouseover", function () {
  bagThree.src = "images/bags/bag-1.png";
});
//input field
let textField = document.getElementById("text-field");
textField.addEventListener("keyup", function (event) {
  let text = event.target.value;
  let button = document.getElementById("button");
  if (text === "email") {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});
//footer
let changeColor = document.getElementById("subscribe");
changeColor.addEventListener("dblclick", function () {
  changeColor.style.backgroundColor = "black";
  changeColor.style.color = "white";
});
let changeColor1 = document.getElementById("subscribe");
changeColor1.addEventListener("click", function () {
  changeColor1.style.backgroundColor = "#feeae9";
  changeColor.style.color = "black";
});
