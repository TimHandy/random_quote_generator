function getRandomQuote() {
  return quotes[ Math.floor(Math.random() * quotes.length) ];
}

function prepTwitterString(quote, author) {
  let authorLength = author.length
  let quoteLength = quote.length
  let availableQuoteLength = 140 - authorLength - 3   // minus 3 for the " - "
  // if quote exceeds 140 chars
  if (authorLength + quoteLength > 140) {
    let quoteSnipped = quote.slice(0, availableQuoteLength - 3)   // minus 3 for the "..."
    return quoteSnipped + "..." + " - " + author
  // if quote shorter than 140 chars
  } else {
    let quoteSnipped = quote.slice(0, availableQuoteLength)
    return quoteSnipped + " - " + author
  }
}

function updateQuote() {
  let quoteObject = getRandomQuote();
  let author = quoteObject.author;
  let quote = quoteObject.quote;
  let twitterString = prepTwitterString(quote, author)
  $("#quote-box").html(quote + "." + "<p><br> - " + author);
  // apply the corect url to pre-populate the twitter tweet box
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+ twitterString).attr('target', '_blank');
}

$(document).ready(function() {
  updateQuote();
});

$('#quote-button').on('click', function() {
  updateQuote();
  });

// TODO: Try this with a quotes JSON api. Maybe http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?%22
