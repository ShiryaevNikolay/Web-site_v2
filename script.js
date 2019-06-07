$(document).ready(function () {
    var f = false;

    $(".grid > a").click(function () {
        if(f == false){
            $(this).toggleClass("div_active");
            $(".grid > a").not(this).hide();
            f = true;
            
            $(".grid > a > h1").css({
                "margin": "2% 0 0 2%"
            }); 
        
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