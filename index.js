let currentJoke;
$(document).ready(function() {
  $('.js-get-joke').click(function() {
    $.getJSON('https://icanhazdadjoke.com/', function(data) {
      currentJoke = data.joke;
      $('.joke').html(
        `<h2 title="Dad joke">${data.joke}</h2>`
      );
    });
  });
  $('#tweet-quote').on('click', function() {     
    open('https://twitter.com/?status=' + encodeURIComponent(currentJoke + ' #dadjokes'));
  });
});