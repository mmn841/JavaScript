//Test if a given input line,
// * Is a valid tweet with less than 140 characters and 
// * Contains the String "lol" in any case, anywhere in the input

var isTweet = function(tweet) {
    return String(tweet).length <= 140;
}

var isLoLInTweet = function(tweet) {
    var tweetString = new String(tweet);

    return (tweetString.toLocaleLowerCase().indexOf("lol") != -1);
}

var input = "hello world, this is a tweet statement, lol";

console.log("Is \"" + input + "\" a valid tweet: " + isTweet(input));
console.log("Does \"" + input + "\" contain the string \"lol\": " + isLoLInTweet(input));