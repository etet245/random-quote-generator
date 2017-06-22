$(document).ready(function() {
  $.ajaxSetup({cache: false});
  
  function loadQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      $("#quote").html(json[0].content);
      $("#author").html("- " + json[0].title);
      
      if (json[0].content.length>160) {
        $("#quote").addClass("long");
      } else if ($("#quote").hasClass("long")) {
        $("#quote").removeClass("long");
      }
    });
  }
  
  loadQuote();
  
  $("#tweet").on("click", function() {
    var tweetText = $("#quote").text() + $("#author").text();
    
    window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(tweetText), "_blank");
  });
  
  $("#new-btn").on("click", function() {
    loadQuote();
  });
});