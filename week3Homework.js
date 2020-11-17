const pizzaToppings = ["pepperoni", "sausage", "chicken", "ground beef", "mushrooms", "green peppers", "onions", "olives", "anchovies"];

function greetCustomer(pizzaToppings) {
 return `Welcome to Pizza House, our toppings are: ${pizzaToppings}, and ${pizzaToppings[pizzaToppings.length-1]}.`;
}

greetCustomer(pizzaToppings.join(", "));

const pizzaSize = ["small", "medium", "large"];
const crustType = ["thick", "pan style", "thin", "cheese filled"];
function getPizzaOrder(pizzaSize, crustType, ...pizzaToppings) {
  return `One ${pizzaSize} ${crustType} crust pizza with ${pizzaToppings} coming up!`;
}

getPizzaOrder("large", "thick", "pepperoni", "sausage", "onions");
pizzaSize;
crustType;
pizzaToppings;

function preparePizza(i) {
   for (let i = 0; i < pizzaSize.length; i++) {
    return ("Cooking pizza ..." + pizzaSize[i] +" "+ crustType[i] +" "+ pizzaToppings[i]);
  }
}

preparePizza();

function servePizza() {
  return ("Order up! Here's your " + preparePizza(1) + ". Enjoy!")
}

servePizza();