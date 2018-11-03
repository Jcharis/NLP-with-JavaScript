var Sentiment = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Sentiment("English",stemmer,'afinn');

// For working with Multiple Examples You Need A Tokenizer
var natural = require("natural");
var tokenizer = new natural.WordTokenizer();

//Single Example
console.log(analyzer.getSentiment(["He","hates","Javascript","and","Julia","Python"]));


// Multiple Examples
var data = ["He likes eating rice all the time",
"The girl was angry at the driver",
"The movies was very interesting",
"The new book is a best seller"]


data.forEach(item=>{
    console.log(analyzer.getSentiment(tokenizer.tokenize(item)));
})

