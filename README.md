

# Week 4 Project - Object-Oriented JavaScript!
By Shankaron Mohamed


## Technologies Used
-HTML
-CSS
-Javascript

## Description
This is a project that allows users to select from a variety of pizza toppings and sizes. After selecting the size and toppings, it returns a price. 
### Setup/Installation Requirements
- open https://github.com/ShanaySharif/Object-Oriented-project in your browser!
- Go to repository
- Download zipfolder
- open up Visual Studio Code
- Open folder with the repository that was downloaded
in Visual Studio Code on the bottom right hand side, run the application and it should open on your browser.

## Tests
 Describe Pizza()

Test: "It should return a Pizza object with three properties for toppings "
code: const myPizza = new Pizza (["pineapple", "olives", "jalapeno"], "large");
code: console.log(myPizza);
Expected Output: '{["pineapple", "olives", "jalapeno"], "large"}'

Test: "it should return the total pizza price'
code: const myPizza = new Pizza (["pineapple", "olives", "jalapeno"], "large");
code: getPrice(myPizza);
Expected Output: "13.45"

Test: "it should return the price of the large pizza size'
code: const myPizza = new Pizza (["pineapple", "olives", "jalapeno"], "large");
code: getSizePrice(myPizza);
Expected Output: "12"


### Known Bugs
- No known bugs.

### License
MIT
Copyright (c) 2023 Shankaron Mohamed



