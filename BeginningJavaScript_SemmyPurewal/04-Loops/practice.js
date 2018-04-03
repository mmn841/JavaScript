// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (str) {
    var result = false;

    if(str.length == 1) {
        var s = str.toLowerCase();
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
            result = true;
        }
    }
    return result;
};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (str) {
    var result = false;

    if(str.length === 1) {
        if (str >= "a" && str <= "z") {
            result = true;
        }
    }
    return result;
};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (num) {
    var result = 0;

    if(typeof(num) !== "number") {
        throw "input must be a zero or a positive number!"
    }

    if(num < 0) {
        throw "input must be a zero or a positive number!"
    } 

    for(var i = 0; i <= num; i++) {
        result = result + i;
    }
    return result;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a, b) {
    var errormsg = "inputs should be numbers!";
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        throw errormsg;
    }

    var startIdx;
    var endIdx;

    if(b > a) {
        startIdx = a;
        endIdx = b;        
    } else {
        startIdx = b;
        endIdx = a;
    }

    var result = 0;

    for(var i = startIdx ; i <= endIdx; i++) {
        result = result + i;
    }

    return result;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (str) {
    var errorMsg = "input to countVowels must be a string!";

    if(typeof(str) !== "string") {
        throw errorMsg;
    }

    var result = 0;
    var lcc;

    for(var i = 0; i < str.length; i++) {
        if(isVowel(str.charAt(i))) {
            result = result + 1;
        }
    }

    return result;
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (str) {
    var errorMsg = "input to reverseString must be an string!";

    if(typeof(str) !== "string") {
        throw errorMsg;
    }

    var result = "";
    for(var i = (str.length - 1); i >= 0; i--) {
        result = result + str.charAt(i);
    }

    return result;
};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (num) {
    var result = true;

    if(typeof(num) === "number") {
        if (num > 1) {
            var upperLimit = (num / 2) + 1;
            for(var i = 2; i < upperLimit; i++) {
                if(num % i === 0) {
                    result = false;
                    break;
                }
            }    
        } else {
            result = false;
        }
    } else {
        result = false;
    }

    return result;
};


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (num) {
    var e = "input should be a number";

    if(typeof(num) !== "number") {
        throw e;
    }

    var result = 0;

    for(var i = 0; i <= num; i++) {
        if(isPrime(i)) {
            result = result + i;
        }
    }
    return result;
};


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (num) {
    var e = "input number should be zero or a positive number!";

    if(typeof(num) !== "number") {
        throw e;
    }

    var result = 0;
    if(num < 0) {
        throw e;
    }

    var primeCount = 0;
    for(var i = 0; primeCount < num; i++) {
        if(isPrime(i)) {
            result = result + i;
            primeCount++;
        }
    }

    return result;
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function (str) {
    var result = "";

    var e = "Invalid input";
    if(typeof(str) !== "string") {
        throw e;
    }
    
    var lcc;
    for(var i = 0; i < str.length; i++) {
        lcc = str.charAt(i).toLowerCase();
        if(lcc >= "a" && lcc <= "z") {
            result = result + str.charAt(i);
        }
    }
    
    return result;
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (str) {
    var result = false;

    if(typeof(str) === "string") {
        var letterOnly = removeNonLetters(str);
        var reverseStr = reverseString(letterOnly);

        if(letterOnly.toLowerCase() === reverseStr.toLowerCase()) {
            result = true;
        }
    }

    return result;
};