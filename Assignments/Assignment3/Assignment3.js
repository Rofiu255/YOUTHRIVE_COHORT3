// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
var myName = "Mujeeb Rofiu";
var age = 25;
var nationality = "Nigerian";

var introduces =
  "1. I am " +
  myName +
  "." +
  " I am " +
  age +
  " years old. " +
  "I am a " +
  nationality;

console.log(introduces);


//2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.

var favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";
var upperCaseQuote = favoriteQuote.toUpperCase();
var lowerCaseQuote = favoriteQuote.toLowerCase();

console.log("2. Upper case quote: " + upperCaseQuote + ".");
console.log("Lowe case quote: " + lowerCaseQuote);


//3. Take a word and rearrange it in reverse order, then log the reversed word.
var word = "JavaScript";
var reversedWord = word.split("").reverse().join("");
console.log("3. Reversed word: " + reversedWord + ".");

//4. Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
var item1Price = 10.99;
var item2Price = 20.49;
var item3Price = 15.75;
var totalPrice = item1Price + item2Price + item3Price;
console.log("4. The total price of the items is: $" + totalPrice.toFixed(2) + ".");


//5. Find the average of 5 test scores stored in variables. Display the average with a message.
var testScore1 = 85;
var testScore2 = 90;
var testScore3 = 78;
var testScore4 = 88;
var testScore5 = 92;
var averageScore = (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5;
console.log(
  "5. The average of the test scores is: " + averageScore.toFixed(2) + "."
);


//6. Create an array of your 5 favorite foods. Display the first and last items in the array.
var favoriteFoods = ["Amala", "Pounded yam", "Tuwo", "Burger", "Ice Cream"];
var firstFood = favoriteFoods[0];
var lastFood = favoriteFoods[favoriteFoods.length - 1];
console.log("6. My first favorite food is: " + firstFood + ".");
console.log("Last favorite food is: " + lastFood + ".");


//7. Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favoriteFoods.unshift("Rice");
favoriteFoods.push("Chicken");
console.log("7. My updated favorite foods are: " + favoriteFoods.join(", ") + ".");


//Create three arrays Each array must contain 10 student names as string values. 
//8. Create array jssOne
var jssOne = [
  "John",
  "Mary",
  "Peter",
  "Sarah",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "James",
  "Olivia"
];


//9. jssTwo
var jssOne = [
  "John",
  "Mary",
  "Peter",
  "Sarah",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "James",
  "Olivia"
];
 
//10. jssThree
var jssThree = [
  "John",
  "Mary",
  "Peter",
  "Sarah",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "James",
  "Olivia"
];

