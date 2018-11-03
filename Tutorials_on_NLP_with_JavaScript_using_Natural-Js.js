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


//STEMMING
// reducing word to its base form or stem
// Normalization

// PorterStemmer
// LancasterStemmer
//[ running,runner,run,runs ]

// Using Normal English Stemmer
console.log(natural.PorterStemmer.stem('running'));

// Using A Stemmer for Russian
console.log(natural.PorterStemmerRu.stem('готовите'));

// Using A Stemmer for French
console.log(natural.PorterStemmerFr.stem('comprendre'));

// Using the .attach() method 
natural.PorterStemmer.attach();
console.log("running".stem());
// Tokenize and stem each word
console.log("The runner was running to the flowing streams".tokenizeAndstem());

// Using the Lancanster
console.log(natural.LancasterStemmer.stem('argued'));


//NOUN AND VERB INFLECTOR
var nounInflector = new natural.NounInflector();

//Plural & Singular 
console.log(nounInflector.pluralize('book'));

var docx = ["index","matrix","sheep","book"]
docx.forEach(function(s){
    console.log(nounInflector.pluralize(s));
})


// Singularize
console.log(nounInflector.singularize('books'));

//Verb Inflector
var verbInflector = new natural.PresentVerbInflector();
console.log(verbInflector.pluralize('becomes'));
console.log(verbInflector.singularize('become'));

// Using the .attach() method
verbInflector.attach()
console.log("talk".singularizePresentVerb());


// SENTIMENT ANALYSIS

var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var sent_analyzer = new Analyzer("English",stemmer,"afinn");

console.log(sent_analyzer.getSentiment(["I","like","apple"]))


// SENTIMENT ANALYSIS  FOR LARGE DATA
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer('English',stemmer,'afinn');
var natural = require('natural');
var tokenizer = new natural.WordTokenizer()

console.log(analyzer.getSentiment(["I","don't","like","apples"]))
console.log(analyzer.getSentiment(["He","hates","apples"]))

var data = ["He likes eating rice all the time","The girl was angry at the driver","The movies was very interesting",
"The new book is a best seller"]

data.forEach(item=>{
    console.log(analyzer.getSentiment(tokenizer.tokenize(item)));
})


// CLASSIFIERS - Using Machine Learning - Naive Bayes Classifier
var natural = require('natural');
var classifier = new natural.BayesClassifier();

// Simple Example
classifier.addDocument('We need to buy a new hard drive', 'hardware');
classifier.addDocument('i need a new power supply', 'hardware');
classifier.addDocument('The motherboard is broken', 'hardware');
classifier.addDocument('We are running out of memory storage', 'hardware');
classifier.addDocument('The computer is new', 'hardware');
classifier.addDocument('The unit test failed', 'software');
classifier.addDocument('The code works well', 'software');
classifier.addDocument('I want to refactor the program', 'software');
classifier.addDocument('program', 'software');
classifier.addDocument('You have to push the code to github', 'software');

classifier.train();

console.log(classifier.classify('The program is not working'));


// Persisting 
classifier.save('myclassifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
});

// To Use the Classifier

natural.BayesClassifier.load('myclassifier.json', null, function(err, classifier) {
    console.log(classifier.classify('The hard drive is broken'));
});




// By JCharis Jesse
// Jesus Saves @JCharisTech
// J-Secur1ty
