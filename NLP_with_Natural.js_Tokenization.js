var natural = require('natural');

// TOKENIZATION
// Breaking words or sentences into tokens

var tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize("I like working with Java, Javascript,Julia,Python,Go,& C"));

var ex = "I like working with Java, Javascript,Julia,Python,Go,& C"
console.log(ex.split(" "))

//Regular Expression Tokenizer
var regTokenizer = new natural.RegexpTokenizer({pattern:/\-/});
console.log(regTokenizer)


// Jesus Saves @JCharisTech