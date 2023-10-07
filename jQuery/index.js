//$('h1').css("color","red");//change the color
//$("h1").css("font-size","2rem");//change the fonth size
//$("h1").addClass("big-title");//use to addclass in h1 tag
$("h1").addClass("big-title margin-1");//use to add multiple class in hi tag
$("h1").text('Add new text');//use to add new text in h1 tag
$("button").html("<em>again click</em>");//use to add html 
console.log($('img').attr('scr'));//use to get the attribute
$('a').attr('href','https://www.yahoo.com');//use to get and set the attribute tag
/*for( var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="purple";
    });this done by using javascript
}*/
//using j query 
$('button').click(function() {
    $("h1").css("color","purple");
});
//keypress event
$('input').keypress(function(event){
  console.log(event.key);
});
// CHANGE THE TEXT OF H1 TAG 
$(document).keypress(function(event){
    $("h1").text(event.key);
});
// on is use to add any event listner
$(document).on("mouseover", function(){
  $("h1").css("color","orange")
});
//Add html element in using jQuery
$("h1").before("<p>adding new paragraf before h1 tag<p>");
$("p").css("color","green");
$("p").css("font-size","5rem");
$("h2").after("<button class=new>hide</button>");
$("h2").before("<button>show</button>");
$("h3").prepend("<button>newButton</button>");
$("h3").append("<button>newButton</button>");
//animation in jquery
