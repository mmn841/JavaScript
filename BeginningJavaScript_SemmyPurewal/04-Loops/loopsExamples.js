//while loop
var number = 0;
while (number < 10) {
    console.log(number);
    number = number + 1;
}

//for loop to print the first 100 positive integers
for (var i = 1; i<=100; i++) {
    console.log(i);
}

//for loop to print the positive multiples of 3 smaller than 100
for(var i = 1; i <=100; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

//for loop to print the positive multiples of 3 smaller than 100
for(var i = 3; i <=100; i+=3) {
    console.log(i);
}

//Find the largest divisor
var largestDivisor = function(num) {
    var result = 1;

    for(var i = 2; i < num; i++) {        
        if(num % i === 0) {            
            result = i;
        }
    }

    return result;
}

var num = 8;
console.log("Largest divisor of " + num + ", is: " + largestDivisor(num));