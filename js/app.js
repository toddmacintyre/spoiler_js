//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$('.spoiler span').hide();

//2, Add a button
$('.spoiler').append("<button>Show Spoiler</button>");

//3, When button pressed
$('button').click( function() {
  //3.1, Show spoiler
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});

////4, When spoiler pressed
//  $('.spoiler span').click( function() {
//    //4.1, Hide spoiler
//    $(this).hide();
//    //4.2 Display button
//    $(this).parent().append("<button>Show Spoiler</button>");
//  });
//  