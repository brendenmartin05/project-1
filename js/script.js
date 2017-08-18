var quotes = [
	{
		quote: 'I\'m also honored to have the greatest temperament that anybody has.',
		source: 'Donald Trump',
		citation: 'Campaign Rally',
		year: 2016
	},
	{
		quote: 'You know I\’m automatically attracted to beautiful — I just start kissing them. It\’s like a magnet. Just kiss. I don\’t even wait. And when you\’re a star, they let you do it. You can do anything. Grab them by the p**sy. You can do anything.',
		source: 'Donald Trump',
		citation: 'Access Hollywood Interview',
		year: 2005
	},
	{
		quote: 'That makes me smart.',
		source: 'Donald Trump',
		citation: 'Presidential Debate',
		year: 2016
	},
	{
		quote: 'I\'ve had a beautiful, I\'ve had a flawless campaign. You\'ll be writing books about this campaign',
		source: 'Donald Trump',
		citation: 'Presidential Campaign Trail',
		year: 2016
	},
	{
		quote: 'I alone can fix it',
		source: 'Donald Trump',
		citation: 'RNC 2016',
		year: 2016
	},
	{
		quote: 'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. We are the change that we seek.',
		source: 'Barack Obama',
		citation: 'State of the Union',
		year: 2012
	},
	{
		quote: 'If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.',
		source: 'Barack Obama',
		citation: 'Press Corps',
		year: 2014
	},
	{
		quote: 'You know, my faith is one that admits some doubt.',
		source: 'Barack Obama',
		citation: 'Jimmy Kimmel Live',
		year: 2009
	},
	{
		quote: 'I think when you spread the wealth around it\'s good for everybody.',
		source: 'Barack Obama',
		citation: 'White House Lawn',
		year: 2010
	},
	{
		quote: 'The United States is not, and never will be, at war with Islam.',
		source: 'Barack Obama',
		citation: 'State of the Union',
		year: 2014
	}
];

// Declaring global variables
var quote;
var source;
var citation;
var year;
var message;

// Helper print function
function print(message){
	outputDiv = document.getElementById('quote-box');
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
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

getRandomQuote();
printQuote();
print(message);
