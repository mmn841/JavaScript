var getTagName = function (tag) {

    var errorStmt = "Error: Not an HTML Element!";
    if(!tag.startsWith("<") && !tag.endsWith(">")) {
        throw errorStmt;
    } 

    var ot = tag.substring(1, tag.indexOf(">"));
    var ct = tag.substring(tag.indexOf("</") + 2, tag.length - 1);

    console.log("ot: " + ot);
    console.log("ct: " + ct);
    if(!(ot === ct)) {
        throw errorStmt;
    }

    return ot;
};

console.log(getTagName("<p>this is a paragraph</p>") + ", his: p");
console.log(getTagName("<div>this is a div</div>") + ", his: div");
console.log(getTagName("<p>this is wrong</div>") + ", his : error");