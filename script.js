$(".image1").dblclick(function(){
  $(".image1").hide();
});
$(".image2").hover(function(){
  $(".image2").hide();
  $(".image2.5").show();
});
$(".image3").click(function(){
  $(".image3").hide();
});

//When mouse hovers title, Reveal message
$(".title").mouseover(function(){
  $(".title").html("Mr.House is awesome");
});

//When mouse dblclick image, change the image

//If mouse clicks image, change title color
var input = $(".commentInput").val();
$(".commentButton").click(function(){
  input = $(".commentInput").val();
  $(".commentBox").append(  `<li>Username: ${input}</li>`);
});