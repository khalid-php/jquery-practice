$(document).ready(function() {
    $("#clrBtn").on("click",function() {
    $(".stm").hide();
    });
    // $("#btm").on("dblclick",function (){
    //     $(".stm").fadeIn();
    // });
    $("#enter").on("mouseenter",function () {
        $("#enter").hide();
    });
    $("#btn").on("mouseleave",function (){
        $("#enter").show();
    });
    $(".box").toggle();
    $(".box").slideDown(2000);
});

$(document).ready(function (){
    $("#top").on("mouseover",function(){
        $("#top").slideUp(2000);
    });
    $("#top").on("mouseleave",function(){
        $("#top").slideDown(1000);
    });
});