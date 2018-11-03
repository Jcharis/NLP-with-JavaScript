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


// By JCharis Jesse
// Jesus Saves @JCharisTech
