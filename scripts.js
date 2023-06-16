//Business logic 
// function Friend(firstName, lastName, yearsknown){

function Pizza (pizzaTopping,size, _additionalTopping) {
    this.pizzaTopping = pizzaTopping;
    this.size = size;
    this.additionalTopping = _additionalTopping 
}

Pizza.prototype.getPizzaDetails = function() {
    return this.pizzaTopping + " " + this.size + " " + this.additionalTopping
};

const myPizza = new Pizza ("pinapple", "olives", "jalapeno");
const pizzaDetails = myPizza.getPizzaDetails();


 // Prototype method to calculate the cost of the pizza

 Pizza.prototype.calculateCost = function() {
    // Define the cost based on the size (you can adjust these values)
    let sizeCost = {
      small: 8,
      medium: 10,
      large: 12
    };


// console.log(pizzaDetails);


//displaying pizza details

//UI Logic 


