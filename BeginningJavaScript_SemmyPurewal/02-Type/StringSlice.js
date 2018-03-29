// Get the last n letters from the given string
var stringSlice = function(str, n) {
    var result = null;
    if (typeof(str) == "string") {
        var pStr = String(str);
        result = pStr.slice(pStr.length - n).toUpperCase();
    }

    return result;
}

console.log(stringSlice("Hello World", 5));
console.log(stringSlice(123, 1));