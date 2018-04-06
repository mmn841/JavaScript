var userWithTweetsToDiv = function (user) {
    if(typeof(user) !== "object") {
        throw "Invalid input";
    }

    var result = "<div><h1>" + user.name + "</h1><h2>" + user.screen_name + "</h2><ul>";
    var tweetLst = user.tweets.reduce(function(val, tweet){
        return val + "<li>" + tweet + "</li>";
    }, "");

    result = result + tweetLst + "</ul></div>";

    return result;
};


var example = {
    "name": "Semmy Purewal",
    "screen_name":"semmypurewal",
    "tweets": [
        "this is a tweet.",
        "this is another tweet!"
    ]
};

console.log(userWithTweetsToDiv(example) + "\n<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet!</li></ul></div>");