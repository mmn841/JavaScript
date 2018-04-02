// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (str) {
    var result;

    if(new String(str).length >= 10) {
        result = "strong";
    } else if (str.length >= 7 && str.length < 10) {
        result = "medium";
    } else {
        result = "weak";
    }

    return result;
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
    if(!(typeof(year) === "number")) {
        throw "THAT's NOT A NUMBER!";
    }

    var result = false;
    if(year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = true;
            }             
        } else {
            result = true;
        }
    }

    return result;
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (str1, str2, str3) {

    if(typeof(str1) !== "string" || typeof(str2) !== "string" || typeof(str3) !== "string") {
        throw "ALL THREE ARGS MUST BE STRINGS!"
    }

    var result;
    if (str1 < str2 && str1 < str3) {
        result = str1;
    } else if (str2 < str1 && str2 < str3 ) {
        result = str2;
    } else {
        result = str3;
    }

    return result;
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (tag) {

    var errorStmt = "Error: Not an HTML Element!";
    if(!tag.startsWith("<") && !tag.endsWith(">")) {
        throw errorStmt;
    } 

    var ot = tag.substring(1, tag.indexOf(">"));
    var ct = tag.substring(tag.indexOf("</") + 2, tag.length - 1);

    if(ot !== ct) {
        throw errorStmt;
    }

    return ot;
};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {
    var val;
    var result = tweet;
    var r = Math.floor(Math.random() * 4);

    if(r === 0) {
        val = "lol";
    } else if ( r === 1) {
        val = "omg";
    } else if (r === 2) {
        val = "lmao";
    } else {
        val = "rofl";
    }
    
    if(tweet.toLowerCase().indexOf(val) === -1) {
        result = tweet + " " + val;
    }
    return result;
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (question) {
    var result;

    if(!(typeof(question) === "string")) {
        result = false;
    } else {
        if(question.endsWith("?")) {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
    var result;

    if(!(isQuestion(question))) {
        throw "THAT DOESN'T SOUND LIKE A QUESTION!";
    } else {
        var r = Math.round(Math.random() * 2 * 100) / 100;

        if(r >= 1) {
            if(r >= 1 && r < 1.10) {
                result = "It is certain";
            } else if (r >= 1.10 && r < 1.20) {
                result = "It is decidedly so";
            } else if (r >= 1.20 && r < 1.30) {
                result = "Without a doubt";
            } else if (r >= 1.30 && r < 1.40) {
                result = "Yes definitely";
            } else if (r >= 1.40 && r < 1.50) {
                result = "You may rely on it";
            } else if (r >= 1.50 && r < 1.60) {
                result = "As I see it, yes";
            } else if (r >= 1.60 && r < 1.70) {
                result = "Most likely";
            } else if (r >= 1.70 && r < 1.80) {
                result = "Outlook good";
            } else if (r >= 1.80 && r < 1.90) {
                result = "Yes";
            } else {
                result = "Signs point to yes";
            }
        } else if (r >= 0.50 && r < 1) {
            if(r >= 0.50 && r < 0.60) {
                result = "Reply hazy try again";
            } else if (r >= 0.60 && r < 0.70) {
                result = "Ask again later";
            } else if (r >= 0.70 && r < 0.80) {
                result = "Better not tell you now";
            } else if (r >= 0.80 && r < 0.90) {
                result = "Cannot predict now";
            } else {
                result = "Concentrate and ask again";
            }
        } else {
            if(r >= 0 && r < 0.10) {
                result = "Don't count on it";
            } else if (r >= 0.10 && r < 0.20) {
                result = "My reply is no";
            } else if (r >= 0.20 && r < 0.30) {
                result = "My sources say no";
            } else if (r >= 0.30 && r < 0.40) {
                result = "Outlook not so good";
            } else {
                result = "Very doubtful";
            }
        }
    }

    return result;
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (word, position, str) {
    var result;

    if(typeof(word) !== "string" || typeof(position) !== "number" || typeof(str) !== "string") {
        throw "the data type of the inputs are incorrect";
    }
    if(String(str).length <= position) {
        throw "the string doesn't have that many letters!";
    } 

    var charV = str.charAt(position);
    var wordUpdated = "-" + word + "-" + charV;
    result = str.replace(charV, wordUpdated);

    return result;
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (str) {
    var result;

    if(!(typeof(str) === "string")) {
        throw "THAT's NOT A STRING!";
    } 

    var position = Math.floor(Math.random() * str.length);

    var r = Math.floor(Math.random() * 4);
    var val;
    if(r === 0) {
        val = "lol";
        result = interjectAt(val, position, str);
    } else if ( r === 1) {
        val = "omg";
        result = interjectAt(val, position, str);
    } else if (r === 2) {
        val = "lmao";
        result = interjectAt(val, position, str);
    } else {
        val = "rofl";
        result = interjectAt(val, position, str);
    }

    return result;
};