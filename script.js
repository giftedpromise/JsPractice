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
