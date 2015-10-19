$(document).ready(function(){

  //This function displays all the users tweets.
  var showAllStream = function () {
    var $body = $('body');
    $body.find('.tweet').hide();
    $body.html('');
    
    var index = streams.home.length - 1;
   
    //This creates a button at the top that shows new tweets when pressed
    $body.append('<div class="tweettopall "></div>')
    $body.find('.tweettopall').text('View New Tweets')

    while (index >= 0) {
      var tweet = streams.home[index];
      
      //Adding a html node to the body for each tweet with a class for the username, message and timestamp for styling.
      var $tweet = $('<div class="tweet" ><span class = "username" data-user='+tweet.user+ '>@' + tweet.user +'</span><span class="message"> '+tweet.message+'</span><span class="timestamp"><br> '+jQuery.timeago(tweet.created_at)+'</span></div>');
      $tweet.appendTo($body);
      index -= 1;
    }
  }; 

  //This function displays a users tweets when a username is clicked.
  var showUserStream = function() {
    
    //This variable references the clicked username from the data attribute.
    var clickeduser = $(this).data('user');
    var $body = $('body');
    var index = streams.users[clickeduser].length - 1;
    
    //Hiding this tweets and buttons from the previous stream.
    $body.find('.tweettopuser').hide()
    $body.find('.usertweet').hide()
    $body.find('.tweet').hide();
    $body.find('.tweetbottom').hide()
    $body.find('.tweettopall').hide()
    $body.append('<div class="tweettopuser" data-user='+clickeduser+ '>View New Tweets</div>')
    
    
    while (index >= 0) {
      var tweet = streams.users[clickeduser][index];   
      var $tweet = $('<div class="usertweet" ><span class = "username" data-user='+tweet.user+ '>@' + tweet.user +'</span><span class="message"> '+tweet.message+'</span><span class="timestamp"><br> '+jQuery.timeago(tweet.created_at)+'</span></div>');
      $tweet.appendTo($body);
      index -= 1;
    } 
    $body.append('<div class="tweetbottom">View All User Tweets</div>')
  };
    
  //This shows the userstream when a username is clicked.
  $(document).on('click', '.username', showUserStream);
   
  //This function displays all usertweets when the view all tweets button on the bottom of the screen is clicked.
  $(document).on('click', '.tweetbottom', showAllStream);


  //This function displays all usertweets when the view new tweets button at the top on the home stream screen is clicked.
  $(document).on('click', '.tweettopall', showAllStream);

  //This displays the new user tweets when the view new tweets button is pressed on the user screen. 
  $(document).on('click', '.tweettopuser', showUserStream);

  showAllStream();
 
});      