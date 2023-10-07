$(document).ready(function(){
    console.log('i am in new file now')
    console.log("we are using jquery");
    //There are three type of selector in J Query
//1 element selecter('element')
//2 class slector('.class')
//3 Id slector("#id")
//$('p').click();//click on p
$('p').click(function(){
    console.log("click on p", this);
   // $('p').hide();//hide all
  // $(this).hide();//hide on which we click
   
});//do this when click on p
// $('#second').click(); //example of id selecter
//$('odd').click();


//Event in jquery
/* mouse event=click,dblclick,mouseenter,mouse leave 
keybordEvent=keypress,keydown,mediaKeyStatusmap
formEvent=sumit,change,focus,blur
Document/windowevents=load,resze,scroll,unload */
/*$('p').dblclick(function(){
    console.log('you double clisk on p')
});$('p').mouseenter(function(){
    console.log('you enter in p')
});
$('p').mouseup(function(){
    console.log('you mouseup on p')
});
$('p').mouseover(function(){
    console.log('you over on p')
});*/

//demoing the on methode
$('p').on({'click':function()
{
    console.log('thanks for clicking');
},
mouseleave:function(){
    console.log('mouse leave');
}
})

});
