$(document).ready(function(){
  var $body = $('body');
  $body.html('');
  
  var index = streams.home.length - 1;
  
  $body.append('<div class="tweettop"></div>')
  
  //This shows how many tweets are in the stream at the top.
  $body.find('.tweettop').text(index)
  
  while(index >= 0){
    var tweet = streams.home[index];
    
    var $tweet = $('<div class="tweet"><span class = "username">@' + tweet.user +'</span><span class="message"> '+tweet.message+'</span><span class="timestamp"><br> '+tweet.created_at+'</span></div>');
   
    //Displays each tweet in the stream with the timestamp as well.
   // $tweet.text('@' + tweet.user + ': ' + tweet.message+'\n');
    
    $tweet.appendTo($body);
    
    index -= 1;
  }
  
  $(document).on('click', '.tweet', function(){
    //streams.

    
  })



  });      