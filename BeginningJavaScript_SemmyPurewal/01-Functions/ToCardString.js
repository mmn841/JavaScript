var toCardString = function(cardValue, cardType) {
    var result = cardValue + " of " + cardType;
    return result;
}

console.log(toCardString("ace","spades"));
console.log(toCardString("two","diamonds"));
console.log(toCardString("queen", "hearts"));