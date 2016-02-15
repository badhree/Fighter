$(document).ready(function() {


  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
	$('.ryu-cool').hide();
  }).mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
	$('.ryu-cool').hide();
  }).mousedown(function() {
  	playHadouken();
  	$('.ryu-ready').hide();
	$('.ryu-still').hide();
	$('.ryu-throwing').show();
	$('.ryu-cool').hide();
	$('.hadouken').finish().show().animate({'left': '2020px'},
	  500,
	  function() {
	    $(this).hide();
	    $(this).css('left', '520px');
	  }
	);
   }).mouseup(function() {
   	$('.ryu-throwing').hide();
   	$('.ryu-ready').show();
	$('.hadouken').hide();
       }).keydown(function(event){ 
        alert(event.which);
    });
   
   $(document).keydown(function(event) {
   	if(event.keyCode == 88)
   		{
   			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
   		}
   });
  
	
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

});