var quotes = [
  "You can do anything, but not everything. - David Allen",
  "You miss 100 percent of the shots you never take. - Wayne Gretzky",
  "We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true. - Robert Wilensky",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - H. Jackson Brown Jr.",
  "A life unexamined is not worth living - Socrates",
  "Question authority - they don’t have a clue what they’re doing either, despite how confident they appear.",
  "Rules are for fools - Douglas Bader",
  "Dont wait. The time will never be just right. - Napolean Hill",
  "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
  "Discipline equals freedom. - Jocko Willink",
  "The wisdom of life consists in the elimination of nonessentials. - Lin Yutang",
  "Ignorance more frequently begets confidence than does knowledge. - Charles Darwin",
  "What did you learn in schoold that you still use today? Go ahead teachers, tell me. What? Fear, conformity, don't question authority... - Doug Stanhope",
  "Just because you're offended, doesn't mean you're right - Ricky Gervais"

]

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


$(document).ready(function() {

  // On intitial page load...

  // generate random quote
  var item = randomQuote();
  // apply quote to the quote box
  $("#quote-box").text(item);
  // apply the corect url to pre-populate the twitter tweet box
  $('tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+item);


  // On clicking the Quote button
  $('#quote-button').on('click', function() {
    // create new random quote
    var item = randomQuote();
    // apply quote to the quote box
    $("#quote-box").text(item);
    // apply the corect url to pre-populate the twitter tweet box
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+item).attr('target', '_blank');
    });

});

// TODO: format the quote icon and quote into side by side divs so that the text doesn't wrap
// TODO: format the quote down and centre; it looks a bit odd up under the title
// TODO: Shorten the twitter quote if > 140 chars including the author - see below
// TODO: Try an object for the quote, with author, and quote. Can then make it look a bit nicer on the page
// TODO: Shorten the twitter quote if > 140 chars including the author
// TODO: Try this with a quotes JSON api. Maybe http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?%22
// TODO: Refactor to remove some of the repetition?
