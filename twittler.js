$(document).ready(function(){
  var $body = $('body');
  $body.html('');
  
  var index = streams.home.length - 1;
  
  $body.append('<div class="tweettop"></div>')
  
  //This shows how many tweets are in the stream at the top.
  $body.find('.tweettop').text('View ' +index+ ' New Tweets')
  
  while (index >= 0) {
    var tweet = streams.home[index];
    
    //Adding a html node to the body for each tweet with a class for the username, message and timestamp for styling.
    var $tweet = $('<div class="tweet" ><span class = "username" data-user='+tweet.user+ '>@' + tweet.user +'</span><span class="message"> '+tweet.message+'</span><span class="timestamp"><br> '+moment(tweet.created_at)+'</span></div>');
  
    //Displays each tweet in the stream with the timestamp as well.
   // $tweet.text('@' + tweet.user + ': ' + tweet.message+'\n');
    
    $tweet.appendTo($body);
    
    index -= 1;
  }
  

  //This function displays a users tweets when a username is clicked
  $(document).on('click', '.username', function() {

    //This variable references the clicked username from the data attribute.
    var clickeduser = $(this).data('user');
    var $body = $('body');
    var index = streams.users[clickeduser].length - 1;

    $body.html('');
    $body.append('<div class="tweettop"></div>')
      
    //This shows how many tweets are in the stream at the top.
    $body.find('.tweettop').text('View ' +index+ ' New Tweets')
   
    
    //This hides the previous tweet stream.
    $('body').find('.tweet').hide(); 
   
    while (index >= 0) {
      var tweet = streams.users[clickeduser][index];   
      var $tweet = $('<div class="usertweet" ><span class = "username" data-user='+tweet.user+ '>@' + tweet.user +'</span><span class="message"> '+tweet.message+'</span><span class="timestamp"><br> '+moment(tweet.created_at)+'</span></div>');
      $tweet.appendTo($body);
      index -= 1;
    } 

  });
   


    




});      