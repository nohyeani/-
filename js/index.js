$(function(){

    let baseline = -100;
let visual =$("#visual").offset().top + baseline;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let con5 =$(".con5").offset().top + baseline;
let con6 =$(".con6").offset().top + baseline;

// con1

setInterval(function(){
    $("#visual .slide").stop().animate({"margin-top":"-700px"},500,function(){
        $(".slide img").first().appendTo("#visual .slide");
        $("#visual .slide").css({"margin-top":"0px"});
    });
},500);



$(window).on("scroll",function(){

    
    let scroll = $(this).scrollTop();
   
    if(scroll >= con1 && scroll < con2){
        $(".con1 .h").stop().animate({"width":"85%","color":"#fff"},800,function(){
            $(".con1 .c").stop().animate({"width":"85%","color":"#fff"},800,function(){
                $(".con1 .j").stop().animate({"width":"85%","color":"#fff"},800,function(){
                    $(".con1 .p").stop().animate({"width":"80%","color":"#fff"},800,function(){
                        $(".con1 .i").stop().animate({"width":"75%","color":"#fff"});
                    });
                });
            });
        });
    
    }else if(scroll >= con2 && scroll < con3){
        $(".con2 ul div").addClass("on");

    
    }else if(scroll >= con3 && scroll < con4){
        $(".con3 ul div").addClass("on");
    }else if(scroll >= con4 && scroll < con5){
        $(".con4 ul div").addClass("on");
    
    }else if(scroll >= con5 && scroll < con6){
        $(".con5 li").addClass("on");
    }


});







    
});