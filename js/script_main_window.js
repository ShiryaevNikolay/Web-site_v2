$(document).ready(function () {
    var Slider = {
        sliders: 
        ['img/Certificates/html.jpg', 
        'img/Certificates/css.jpg', 
        'img/Certificates/javaScript.jpg', 
        'img/Certificates/jQuery.jpg', 
        'img/Certificates/java.jpg', 
        'img/Certificates/python.jpg'],
        first_slide: 0,
        setBackground: function(image){
            document.getElementById('show_slider').style.backgroundImage='url(' + image + ')';
        },

        init: function(){
            this.setBackground(this.sliders[this.first_slide]);
        },

        toLeft: function(){
            this.first_slide--;
            if(this.first_slide < 0){
                this.first_slide = this.sliders.length - 1;
            }
            this.setBackground(this.sliders[this.first_slide]);
        },

        toRight: function(){
            this.first_slide++;
            if(this.first_slide > this.sliders.length - 1){
                this.first_slide = 0;
            }
            this.setBackground(this.sliders[this.first_slide]);
        }
    }

    Slider.init();
    setInterval(function(){Slider.toRight();}, 5000)
});