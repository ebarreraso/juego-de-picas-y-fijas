$(document).ready(function(){

    
    var mi_clase = $('.holamundo').css('background','red');
    console.log(mi_clase);
    $('.agrandar').click(function(){
        
        $(this).addClass('texto-puja');
    });

    var h1_texto = $('h1').css('','')

    h1_texto.click(function(){

        var that = $(this);

        if(!that.hasClass('texto-puja')){
            that.addClass('texto-puja');
        }else{
            that.removeClass('texto-puja');
            console.log('click me')
        }
    });

    var div_texto = $('div').css('cursor','pointer');

    div_texto.click(function(){

        var that = $(this);

        if(!that.hasClass('texto-puja')){
            that.addClass('texto-puja');
        }else{
            that.removeClass('texto-puja');
            console.log('click me')
        }
    });

});                                 


