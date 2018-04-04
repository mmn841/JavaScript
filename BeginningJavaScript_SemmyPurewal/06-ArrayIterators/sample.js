//foreach example
var printElement = function(tweet) {
    console.log(tweet);
}

var tweet = ["hello world", "hola", "another tweet", "lol", "tc"];
console.log(tweet);
tweet.forEach(printElement);

tweet.forEach(function(tweet) {
    console.log(tweet);
});

//Find sum
var sum = function(lst) {
    var sum = 0;

    lst.forEach(function(n){
        sum+=n;
    });
    return sum;
}

console.log("Sum is: " + sum([1,2,3,4,5]));

//Using map find cube of the first 10 numbers
var cube = function(n) {
    var lst = [];
    for(var i = 1; i <= n; i++) {
        lst.push(i);
    }

    return lst.map(function(n){
        return Math.pow(n, 3)
    });
}

console.log(cube(10));

//Use filter to return even numbers
var range = function(n) {
    var result = [];

    for(var i = 1; i <= n; i++) {
        result.push(i);
    }

    return result;
}

var lst = range(10);
console.log("Even numbers: " + lst.filter(function(n){
    return ((n % 2) === 0);
}));
console.log("Lst: " + lst);

//Use filter to get prime numbers
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

var prime = range(50).filter(isPrime);
console.log(prime);

//Some and every example
var tweets = ["hello world!", "hola", "this is awesome", "awesome stuff"];
console.log("Array.some result: " + tweets.some(function(tweet){
    console.log(tweet);
    return tweet.toLowerCase().indexOf("awesome") !== -1;
}));

console.log("Array.every result: " + tweets.every(function(tweet){
    console.log(tweet);
    return tweet.toLowerCase().indexOf("awesome") !== -1;
}));

//Array.reduce example
var lst = range(5);
console.log(lst.reduce(function(sum, num){
    return sum + num;
}));

// Find minimum using reduce
lst = [1,100,4,5,6,0.5,9,10];
var minimum = lst.reduce(function(min, num){
    var result = min;
    if (min > num) {
        result = num;
    }
    return result;
});

console.log("lst: " + lst + ", minimum: " + minimum);

// Merge tweets to paragraph
var tweets = ["this is a tweet", "this is not a tweet", "hello world"];
var capitalize = function(tweet) {
    return tweet.charAt(0).toUpperCase() + tweet.slice(1);
}

//First value is the first element in the list
var paragraphify = function(tweets){
    return tweets.reduce(function(para, tweet){
        return para + capitalize(tweet) + ". ";
    });
}

console.log("Tweets: " + tweets + ", paragraphify: " + paragraphify(tweets));

//First value is user defined value
var paragraphify = function(tweets){
    return tweets.reduce(function(para, tweet){
        return para + capitalize(tweet) + ". ";
    }, "");
}

console.log("Tweets: " + tweets + ", paragraphify: " + paragraphify(tweets));

//Converting a array to a string using join
console.log([1,2,3,4,5].join(","));