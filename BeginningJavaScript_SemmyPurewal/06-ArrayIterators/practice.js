// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (lst) {
    if(!Array.isArray(lst)) {
        throw "Invalid input";
    }

    var result = lst.reduce(function(nlst, val){
        return [val].concat(nlst);
    }); 

    return result;
};

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function (lst) {
    var result;

    result = lst.reduce(function(nlst, val){
        return nlst.concat(val);
    }, []);
    return result;
};

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var range = function(n) {
    var result = [];
    for(var i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

var sumOfMultiplesOf3And5 = function (n) {
    return range(n).filter(function(num){
        var result = false;
        if(num % 3 === 0 || num % 5 === 0) {
            result = true;
        }
        return result;
    }).reduce(function(sum, num){
        return sum + num
    });
};

// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel = function (str) {
    return str.split("").some(function(str){
        var s = str.toLowerCase();
        if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
            return true;
        }
    });
};

// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function (tweets) {
    return tweets.reduce(function(longestTweet, tweet){
        var result = longestTweet;
        if(tweet.toLowerCase().indexOf("awesome") !== -1 && tweet.length > longestTweet.length) {
            result = tweet;
        }

        return result;
    }, []);
};

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var getHTMLText = function (str) {
    var strVal = String(str);
    return strVal.substring(strVal.indexOf(">") + 1, strVal.lastIndexOf("</"));
};

var elementsToContent = function (tags) {
    var result = [];

    tags.forEach(function(tag){
        result.push(getHTMLText(tag));
    });

    return result;
};

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randUpTo = function (num) {
    return Math.floor(Math.random() * num);
};

var randomArray = function (length, max) {
    var result = [];

    for(var i = 0; i < length; i++) {
        result.push(randUpTo(max));
    }

    return result;
};

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (lst, size) {
    var result = [];
    var idx;
    
    for(var i = 0; i < size; i++) {
        idx = randUpTo(lst.length);
        result.push(lst[idx]);
    }

    return result;
};
