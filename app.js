// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// Answer
// var help = [
//     [],
//     []
// ];





// Q2. Declare and initialize a multidimensional array representing the following matrix:

// Answer
// var help = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];





// Q3. Write a program to print numeric counting from 1 to 10.

// Answer
// var userInput = +prompt("Give me number and I will count till that number");
// for (var i = 1; i <= userInput; i++){
//     document.write(i + "<br/>");
// }





// Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

//  Answer
// var userInput1 = +prompt("Give me Number of The Table");
// var userInput2 = +prompt("Give me number, how many times you want table");
// document.write("Multiplication table of " + userInput1 + ", lenght " + userInput2 + "<br/><br/>");
// for (var i = 1; i <= userInput2; i++){
//     document.write(userInput1 + " x " + i + " = " + userInput1 * i + "<br/>");
// }





// Q5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// Answer
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br/>");
// }


// document.write("<br/>");


// for (var i = 0; i < fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br/>");
// }





// Q6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Answer
// document.write("Counting:<br/><br/>");
// for (var i = 1; i <= 15; i++){
//     document.write(i + ", ");
// }

// document.write("<br/><br/>");

// document.write("Reverse counting:<br/><br/>");
// for (var i = 10; i > 0; i--){
//     document.write(i + ", ");
// }

// document.write("<br/><br/>");

// document.write("Even:<br/><br/>");
// for (var i = 0; i <= 20; i += 2){
//     document.write(i + ", "); 
// }

// document.write("<br/><br/>");

// document.write("Odd:<br/><br/>");
// for (var i = 1; i <= 20; i += 2){
//     document.write(i + ", "); 
// }


// document.write("<br/><br/>");

// document.write("Series:<br/><br/>");
// for (var i = 2; i <= 20; i += 2){
//     document.write(i + "k, "); 
// }





// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

// Answer
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Cream Bakery. What do you want to order Sir/Ma'am?" , "cookie, pastry");
// var isFound;
// for (var i = 0; i < A.length; i++){
//     if (userInput === A[i]) {
//         document.write(A[i] + " is <b>avaliable</b> at index " + i + " in our bakery");
//         isFound = true;
//     }
// }

// if (!isFound) {
//     document.write("We are sorry. " + userInput + "is <b>not avaliable</b> in our bakery");
// }





 
// Q8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

// Answer
// var A = [24, 53, 78, 91, 12];
// var ACopy = A.slice(0);
// document.write(ACopy[-1]);





// Q9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// Answer
// var A = [24, 53, 78, 91, 12];
// var ACopy = A.slice(0);
// document.write(A[0]);





// Q10. Write a program to print multiples of 5 ranging 1 to 100.

// Answer
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }