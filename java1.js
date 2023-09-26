// var pluss1=document.querySelector('.p');
// var minus1=document.querySelector('.m');
// var reset1=document.querySelector('.r');
// var para=document.querySelector('p');

// var counter=0;
// var fontsize=16;

// pluss1.addEventListener('click', add);
// function add(){
//     counter=counter+1;
//     fontsize=fontsize +1 ;
//     para.style.fontSize=fontsize + "px";
//     para.innerHTML = counter;
// }
// minus1.addEventListener('click' ,minus);
// function minus(){
//     counter=counter-1;
//     fontsize=fontsize -1 ;

//     para.style.fontSize=fontsize + "px";
//     para.innerHTML = counter;
// }

// reset1.addEventListener('click' ,reset);
// function reset(){
//     counter=0;
//     fontsize=16;
  
//     para.style.fontSize=fontsize + "px";
//     para.innerHTML = counter;
// }




$(function(){
    var counter=0
    var fontsize=16

    $('.p').click(function(){
        counter=counter+1;
        fontsize =fontsize+1;
        $("p").text(counter);
        $("p").css("fontSize" ,fontsize +'px');
    });
    $('.m').click(function(){
        counter=counter-1;
        fontsize =fontsize-1;
        $("p").css("fontSize" ,fontsize +'px');
        $("p").text(counter);
    });
    $('.r').click(function(){
        counter=0;
        fontsize=16;
        $("p").css("fontSize" ,fontsize +'px');
        $("p").text(counter);
    });
    
});

