var quotes = [
  "You can do anything, but not everything. - David Allen",
  "You miss 100 percent of the shots you never take. - Wayne Gretzky",
  "We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true. - Robert Wilensky",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” - H. Jackson Brown Jr."
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
  $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text='+item);


  // On clicking the Quote button
  $('#quote-button').on('click', function() {
    // remove Twitter iframes junk
    $("iframe").remove();
    // remove the twitter button - without this it appends a new button each time
    $(".twitter-share-button").remove();
    // add back in the quote box removed by the removal of iframe junk - for some reason this won't reload the nice Twitter button?!!
    $("#quote-box").after('<a class="twitter-share-button" id="tweet-quote" title="Tweet this!" target="_blank">Tweet</a>');
    // create new random quote
    var item = randomQuote();
    // apply quote to the quote box
    $("#quote-box").text(item);
    // apply the corect url to pre-populate the twitter tweet box
    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text='+item).attr('target', '_blank');
    });

});

// TODO: Try to figure out why the twitter button disappears after the first press of the quote button
// FIXME: Why is there so much iframe crap... may I should do this without the Twitter junk... i.e. get rid of the widgets.js script at top of html page and use my own button and icon from Font Awesome or summink.
// TODO: Shorten the twitter quote if > 140 chars including the author
// TODO: Try this with a quotes JSON api
// TODO: Refactor to remove some of the repetition?
