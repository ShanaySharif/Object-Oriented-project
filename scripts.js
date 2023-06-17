//Business logic for Pizza

function Pizza(toppings,size) {
    this.toppings = toppings;
    this.size = size;
}
Pizza.prototype.getPizzaDetails = function() {
    return this.toppings.join(", ") + " " + this.size;
  }

const myPizza = new Pizza (["cheese","pinapple", "olives", "jalapeno"], "large", "tomato");
const pizzaDetails = myPizza.getPizzaDetails();

console.log(pizzaDetails);

function displayPizzaDetails(event){



//Pizza sizes 



 // Prototype method to calculate the cost of the pizza

//  Pizza.prototype.calculateCost = function() {
//     // Define the cost based on the size 
//     let sizeCost = {
//       small: 8,
//       medium: 10,
//       large: 12
//     };
//  }

// console.log(pizzaDetails);



function getPrice(newPizza) {

    let totalPrice = 0;

    //add logic for size prices

    for(topping of newPizza.toppings){
        if (topping === 'cheese') {
            totalPrice += 0.89;
        } else if (topping == 'pineapple') {
            totalPrice += 0.60
        } else if (topping === 'olives' ) {
            totalPrice += 0.40
        } else if (topping === 'jalapeno'
            }

        }
    }

return totalPrice;

}

//UI Logic 
function handleFormSubmission(event) {
    event.preventDefault();

    const inputtedSize = document.querySelector("input#new-size").value;
    const inputtedToppings = [ document.querySelector("input#cheese").value, ]


    let newPizza = new Pizza(inputtedSize, inputtedToppings);
  
    const totalPrice = getPrice(newPizza);
    //set total price to html tAG
}
}
