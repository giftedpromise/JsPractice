let userName;

document.getElementById("submitBtn").onclick = function name() {
  userName = document.getElementById("myText").value;

  document.getElementById("myId").textContent = `Hello, my name is ${userName}`;
};

let count = 0;

document.getElementById("increaseButton").onclick = function increase() {
  count = ++count;
  document.getElementById("countLabel").textContent = count;
};

document.getElementById("decreaseButton").onclick = function decrease() {
  count = --count;
  document.getElementById("countLabel").textContent = count;
};

document.getElementById("resetButton").onclick = function reset() {
  count = 0;
  document.getElementById("countLabel").textContent = count;
};

function calculateTax() {
  console.log(1000 * 0.1);
}

calculateTax();

function sum(a, b) {
  console.log(a + b);
}

sum(4, 5);

let is_hot = true;

if (is_hot) {
  console.log("Drink cold water");
} else {
  console.log("Drink cold water");
}

let has_high_income = true;
let has_good_credit = true;

if (has_high_income && has_good_credit) {
  console.log("you can buy the house");
}

//switch case

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("yellow or green");
    break;
  case "apple":
    console.log("red or green");
    break;
  case "orange":
    console.log("yellow or orange");
    break;
  default:
    console.log("Unknown fruit");
}

//method chaining
const text = "  Hello World!  ";
const result = text.trim().toLowerCase().split(" ");

//objects

let Product2 = {
  color: "white",
  type: "shirt",
};

console.log(Product2.color);

console.log(JSON.stringify(Product2));

//while loop

let i = 1;
while (i <= 5) {
  console.log("Hello");
  i++;
}

//Do -while loop

let counted = 1;

do {
  console.log("Hello");
  counted++;
} while (counted <= 3);

for (let index = 0; index < 7; index++) {
  console.log("hello");
}

//functions

function add(a, b) {
  console.log(a + b);
}

add(4, 6);

//Arrays

let fruits = ["Mango", "orange", "Banana"];
console.log(fruits);
console.log(fruits[2]);

for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
}

//Spread Operator
let num = [1, 2, 3, 4, 6];
let max = Math.max(...num);
console.log(max);

let min = Math.min(...num);
console.log(min);

let newArray = [...num, ...fruits];
console.log(newArray);
console.log(typeof newArray);

//Rest Operator

function openFridge(...foods) {
  console.log(foods);
  console.log(typeof foods);
}

let food1 = "Rice";
let food2 = "beans";
let food3 = "yam";
let food4 = "Bread";

openFridge(food1, food2, food3, food4);

//callBacks

function greet(name, callBack) {
  console.log(`Hello, ${name}`);
  callBack();
}

function sayGoodBye() {
  console.log("Good Bye!");
}

greet("Alice", sayGoodBye);

//forEach

let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(double);
function display(element) {
  console.log(element);
}
numbers.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}

console.log(numbers);

//map()
let doubledWithMap = numbers.map((num) => num * 2);
console.log(doubledWithMap);

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

let userNames = users.map((user) => user.name);

console.log(userNames);

let userAge = users.map((user) => user.age);
console.log(userAge);

let prices = [100, 200, 300];

let withTax = prices.map((price) => {
  return {
    original: price,
    withTax: price * 1.2,
  };
});

console.log(withTax);
