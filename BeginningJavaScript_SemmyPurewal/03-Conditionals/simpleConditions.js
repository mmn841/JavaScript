//Check if the string is a question
var isQuestion = function(str) {
    if(str.endsWith("?")) {
        console.log("The string: \"" + testString + "\" is a question");
    } else {
        console.log("The string: \"" + testString + "\" is not a question");
    }
}

var testString = "Is this a question?";
isQuestion(testString);

//Check the dictionary occurance of a string
var checkDictionaryOccurance = function checkOccurance(str1, str2) {
    var str1LowerCase = str1.toLowerCase();
    var str2LowerCase = str2.toLowerCase();

    if(str1LowerCase < str2LowerCase) {
        console.log("The string \"" + str1LowerCase + "\" comes before \"" + str2LowerCase + "\" in the dictionary");        
    } else {
        console.log("The string \"" + str2LowerCase + "\" comes before \"" + str1LowerCase + "\" in the dictionary");
    }
}

var str1 = "apple";
var str2 = "bananna";
checkDictionaryOccurance(str1, str2);

//Check if a tweet has atleast 100 characters, or in the range of 50 - 100, or less than 50.
var classifyTweet = function(tweet) {
    if(new String(tweet).length >= 100) {
        console.log("The tweet \"" + tweet + "\" is awesome.");
    } else if (tweet.length >= 50 && tweet.length < 100) {
        console.log("The tweet \"" + tweet + "\" is good.");
    } else {
        console.log("The tweet \"" + tweet + "\" can be improved.");
    }
}

var awesomeTweet = "This is awesome tweet, it has more than hundred characters which means, it is quite a long sentence to type on the keyboard."
var goodTweet = "This is good tweet, it has more than fifty characters."
var needsImprovementTweet = "This is tweet can be improved."
classifyTweet(awesomeTweet);
classifyTweet(goodTweet);
classifyTweet(needsImprovementTweet);

//Find max of 3 number, also ensure that all the 3 inputs are numbers
var maxOfThree = function(n1, n2, n3){
    var result;
    if(!(typeof(n1) === "number" && typeof(n2) === "number" && typeof(n3) === "number")) {
        throw "Error: All three inputs must be numbers.";
    }

    if( n1 > n2 && n1 > n3) {
        result = n1;
    } else if (n2 > n1 && n2 > n3) {
        result = n2;
    } else {
        result = n3;
    }

    console.log("Of the numbers, " + n1 + ", " + n2 + ", " + n3 + ", the largest number is: " + result);
}

maxOfThree(5, 10, 15);
maxOfThree(15, 5, 10);
maxOfThree(10, 15, 5);
//maxOfThree("hello world", 5, 10);
//maxOfThree(10, "hello world", 5);
//maxOfThree(5, 10, "hello world");


var tag = "<li>test</li>";
var ot = tag.substring(1, tag.indexOf(">"));
var ct = tag.substring(tag.indexOf("</") + 2, tag.length - 1);
console.log("ot: " + ot + ", ct: " + ct);

//var r = Math.floor(Math.random() * 4);
var r = Math.round(Math.random() * 2 * 100) / 100;
console.log(r);


var str = 'Twas the night before Xmas...';
var newstr = str.replace(/ /g, '1');
console.log(newstr+ " " + str); 