"use strict";
/*Create a function that takes an array, an index, and a value as parameters. Inside the function, use
the splice method to insert the valueat the specified index in the array. Return the modified array*/
function modifiedArray(array, index, value) {
    array = array.splice(index, 0, value);
    return array;
}
var array = [11, 22, 33, 44, 55, 66, 77, 88, 99];
var index = 2;
var value = 28;
console.log("Before:", array);
modifiedArray(array, index, value);
console.log("After:", array);
/*Implement a simple shopping cart program using an array. Create functions to add items, remove items,
 and update quantities using the splice method. Print the cart's contents after each operation*/
function addItem(cart) {
    cart = cart.splice(cart.length - 2, 0, "Sandwich");
    return cart;
}
function removeItem(cart) {
    cart = cart.splice(cart.length - 1, 1);
    return cart;
}
function updateItem(cart) {
    cart = cart.splice(cart.length - 3, 1, "Cake");
    return cart;
}
var cart = ["Coke", "Pizza", "Burger", "Junks"];
console.log("Before Add Items to Cart:", cart);
addItem(cart);
console.log(`After Add Item ${cart}`);
console.log("Before Remove Item:", cart);
removeItem(cart);
console.log(" After Remove Item From Cart:", cart);
console.log("Before Update Item:", cart);
updateItem(cart);
console.log("After updateitem function:", cart);
/*Write a program that uses a while loop to print the first 25 integers.*/
let num = 0;
console.log("Numbers");
while (num <= 25) {
    console.log(num);
    num++;
}
/*Write a program that uses a while loop to print the first 10 even numbers.*/
let Num1 = 1;
let list = [];
console.log(`Even Numbers `);
while (Num1 <= 20) {
    if (Num1 % 2 == 0) {
        list.push(Num1);
    }
    Num1++;
}
console.log(list);
/* Create a function that takes a positive integer as parameter and uses a while loop to calculate and return
the factorial of that number.*/
function factorial(num) {
    var factorialCal = 1;
    while (num != 0) {
        factorialCal = factorialCal * num;
        num--;
    }
    return factorialCal;
}
var result = factorial(10);
console.log(`factorial of num`, result);
/* Write a program having an array of numbers if the number is negative it should remove the
negative number from the array.*/
var array = [-45, -15, 13, 16, 20, 22, -23, 24, 25];
console.log("Array Before Removing:", array);
function RemoveNegativeNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1);
        }
    }
}
RemoveNegativeNum(array);
console.log("After Removing Negative Number From Array:", array);
/*Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the
 sum of all the numbers in the array.*/
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 15, 18, 22, 25, 29, 34, 38, 40];
console.log("Array", arrayNum);
function sum(array) {
    let a = 0;
    let sum = 0;
    while (a < arrayNum.length) {
        sum = sum + arrayNum[a];
        a++;
    }
    return sum;
}
var SumNum = sum(arrayNum);
console.log("Sum:", SumNum);
/* Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each
temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures
in an array. Use a while loop to perform the conversion for each temperature*/
let temperature = [15, 23, 30, 35, 45];
var fahrenheit = [];
function InFarhenheit(temperature) {
    let i = 0;
    while (i < temperature.length) {
        fahrenheit[i] = (temperature[i] * 9 / 5) + 32;
        i++;
    }
}
InFarhenheit(temperature);
console.log("Temprature in fahrenheit:", fahrenheit);
