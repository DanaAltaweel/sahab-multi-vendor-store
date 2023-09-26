
/* first Q*/
$(function(){
    $('#btn1').click(function(){
        $("p:not(:has(*)):not(.ignore)").css("background-color", "red")
    })
});
/* seconed Q*/
$(function(){
    var x = "REPLACE_ME";
    var y= $(":contains(" + x + ")");
    $('#btn5').click(function(){
        $('y').css('color',"red")
    })
    });
/* third Q*/
$(function(){
    $('#btn2').click(function(){
      $('div').find('.special').css("background-color", "green")
    })
});
/* fourth Q*/
$(function(){
    $('#btn3').click(function(){
        $(':header').css('color',"yellow")
    })
});
/* fifth Q*/
$(function(){
    $('#btn4').click(function(){
        $('li:visible').css('color',"red")
    })
});
$(function(){
    $("#btn9").click(function(){
        $(".b").animate({left: '300px'},"slow");
        $(".b").animate({right: '300px'},"slow");
        $(".b").animate({top: '300px'},"slow");

    })
  
});




