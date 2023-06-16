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

// console.log(pizzaDetails);

//UI Logic 


