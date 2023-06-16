//Business logic for Pizza

function Pizza (toppings,size, sauce) {
    this.toppings = toppings;
    this.size = size;
    this.sauce = sauce;
}
Pizza.prototype.getPizzaDetails = function() {
    return this.toppings.join(", ") + " " + this.size + " with " + this.sauce + " sauce";
  }

const myPizza = new Pizza (["cheese","pinapple", "olives", "jalapeno"], "large", "tomato");
const pizzaDetails = myPizza.getPizzaDetails();

console.log(pizzaDetails);

function displayPizzaDetails(event){



//Pizza sizes 







 // Prototype method to calculate the cost of the pizza

 Pizza.prototype.calculateCost = function() {
    // Define the cost based on the size 
    let sizeCost = {
      small: 8,
      medium: 10,
      large: 12
    };


// console.log(pizzaDetails);



//UI Logic 





