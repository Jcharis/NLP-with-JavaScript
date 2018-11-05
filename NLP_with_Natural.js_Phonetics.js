// PHONETICS & METAPHONE
var natural = require('natural');
var phonetics = natural.Metaphone

// Example1
var A = "sea"
var B = "see"

// Example 2
var A = "meat"
var B = "meet"

if(phonetics.compare(A,B))
	console.log('They sound alike');

var phoneticsFormular = phonetics.process('see');
console.log(phoneticsFormular)