//String array
var greetings = ["hello", "hola"];
console.log(greetings);
console.log(greetings[1]);

//Array containing even numbers less than 10
var evenNumbers = [0, 2, 4, 6, 8];
for(var i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i]);
}

//Push the first 15 positive integers into an array using for loop
var intList = [];
for(var i = 1; i <= 15; i++) {
    intList.push(i);
}

console.log(intList);

//String is similar to array, the characters of the string can be accessed using [] and index similar to an array
var greetings = "hello world";
console.log(greetings[1]);
console.log(greetings.charAt(1));

//Concate two arrays
var numbers = [0, 1, 2, 3, 4];
console.log(numbers);
numbers = numbers.concat([5, 6, 7, 8, 9]);
console.log(numbers);

//Find largest number in the array
var findLargest = function(numList) {
    var result = numList[0];

    for(var i = 1; i < numList.length; i++) {        
        if (result < numList[i]) {
            result = numList[i];
        }
    }

    return result;
}

console.log(findLargest([1,2,3,252525,4,5]));

//Fetch multiples of 3
var getMultiplesOfThree = function(nList) {
    var result = [];

    for(var i = 0; i < nList.length; i++) {
        if(nList[i] % 3 === 0) {
            result.push(nList[i]);
        }
    }

    return result;
}

console.log(getMultiplesOfThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));