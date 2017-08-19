// Declaring global variables
var quote;
var source;
var citation;
var year;
var message;

// Helper print function
function print(message){
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = message;
}

 // Get # of quotes and multiply by Math.random. Use 
 // random number to grab the correlating index in quotes array
 // and return the object of the specific array 
function getRandomQuote(){
	var length = quotes.length;
	var randomNumber = Math.floor(Math.random() * length);
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}

 // Grab the quote object and print object values in html by 
 // saving in message variable
function printQuote(){
	var quoteDetails = getRandomQuote();

	if (quoteDetails.year  === ''){
		message = '<p class="quote">' + quoteDetails.quote + '</p>';
		message += '<p class="source">' + quoteDetails.source;
		message += '<span class="citation">' + quoteDetails.citation;
		message += '</span></p>';
	} else if (quoteDetails.citation === ''){
		message = '<p class="quote">' + quoteDetails.quote + '</p>';
		message += '<p class="source">' + quoteDetails.source;

		message += '</span></p>';
	} else if (quoteDetails.year && quoteDetails.citation === ''){
		message = '<p class="quote">' + quoteDetails.quote + '</p>';
		message += '<p class="source">' + quoteDetails.source;
		message += '</span></p>';
	} else {
		message = '<p class="quote">' + quoteDetails.quote + '</p>';
		message += '<p class="source">' + quoteDetails.source;
		message += '<span class="citation">' + quoteDetails.citation;
		message += '</span><span class="year">' + quoteDetails.year;
		message += '</span></p>';
	}
	print(message);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();

