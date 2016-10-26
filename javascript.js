var quotes = [
  {author: 'David Allen', quote: 'You can do anything, but not everything'},
  {author: 'Wayne Gretzky', quote: 'You miss 100 percent of the shots you never take'},
  {author: 'Robert Wilensky', quote: 'We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare. Now, thanks to the Internet, we know that is not true.' },
  {author: 'H. Jackson Brown Jr.', quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover"},
  {author: 'Socrates', quote: 'A life unexamined is not worth living'},
  {author: 'Unknown', quote: 'Question authority - they don’t have a clue what they’re doing either, despite how confident they appear'},
  {author: 'Douglas Bader', quote: 'Rules are for fools'},
  {author: 'Napolean Hill', quote: 'Dont wait. The time will never be just right'},
  {author: 'African Proverb', quote: 'If you want to go fast, go alone. If you want to go far, go together'},
  {author: 'Jocko Willink', quote: 'Discipline equals freedom'},
  {author: 'Lin Yutang', quote: 'The wisdom of life consists in the elimination of nonessentials'},
  {author: 'Charles Darwin', quote: 'Ignorance more frequently begets confidence than does knowledge'},
  {author: 'Doug Stanhope', quote: "What did you learn in school that you still use today? Go ahead teachers, tell me. What? Fear, conformity, don't question authority..."},
  {author: 'Ricky Gervais', quote: "Just because you're offended, doesn't mean you're right"}
]

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
