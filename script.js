$(document).ready(function () {
    var f = false;

    $(".grid > div").click(function () {
        if(f == false){
            $(this).toggleClass("div_active");
            $(".grid > div").not(this).hide();
            f = true;        
        
            var buttom = "<a href='' class='buttom'><span></span></a>";

            $(buttom).appendTo(this);
        }
        var exit = $(".buttom");

        exit.mouseenter(function () { 
            exit.toggleClass("active");
        });
        exit.mouseleave(function () { 
            exit.removeClass("active");
        });
        $(".active").click(function () {
            f = false;
            $(this).removeClass("a_active");
            $(".grid > div").show();
            $("a.buttom").remove();
        });
    });
});