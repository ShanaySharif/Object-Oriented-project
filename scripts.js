//Business logic for Pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.getPizzaDetails = function () {
  return this.toppings.join(", ") + " " + this.size;
};
//add logic for size prices
function getSizePrice(newPizza) {
  let sizePrice = 0;

  if (newPizza.size === "small") {
    sizePrice = 8;
  } else if (newPizza.size === "medium") {
    sizePrice = 10;
  } else if (newPizza.size === "large") {
    sizePrice = 12;
  }
  return sizePrice;
}
function getSizeSelected() {
  let sizeSelected;
  if (document.querySelector("input#small").checked) {
    sizeSelected = "small";
  } else if (document.querySelector("input#medium").checked) {
    sizeSelected = "medium";
  } else {
    sizeSelected = "large";
  }
  return sizeSelected;
}
function getToppingsSelected() {
  let toppings = [];
  let toppingOptions = [
    document.querySelector("input#cheese"),
    document.querySelector("input#jalapeno"),
    document.querySelector("input#pineapple"),
    document.querySelector("input#olives"),
  ];
  for (options of toppingOptions) {
    if (options.checked) {
      toppings.push(options.id);
    }
  }
  return toppings;
}
function getPrice(newPizza) {
  let totalPrice = 0;
  totalPrice = getSizePrice(newPizza);
  for (topping of newPizza.toppings) {
    if (topping === "cheese") {
      totalPrice += 0.89;
    } else if (topping == "pineapple") {
      totalPrice += 0.6;
    } else if (topping === "olives") {
      totalPrice += 0.4;
    } else if (topping === "jalapeno") {
      totalPrice += 0.45;
    }
  }
  return totalPrice;
}
//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = getSizeSelected();
  const inputtedToppings = getToppingsSelected();
  let newPizza = new Pizza(inputtedToppings, inputtedSize);
  const totalPrice = Math.round(getPrice(newPizza) * 100) / 100;
  document.getElementById("result").innerText = totalPrice;
}
window.addEventListener("load", function () {
  document
    .querySelector("form#pizzaForm")
    .addEventListener("submit", handleFormSubmission);
});
