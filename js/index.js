$(document).ready(function(){
    try{
    $('section').ripples({
    resolution:2160,
    dropRadius:20,
    perturbance:0.04,
    interactive:false,
    
})
    }catch(e){
        $('.error').show().text(e);
    };
    setInterval(function(){
        var $auto = $('section');
        var x = Math.random()* $auto.outerWidth();
        var y =  Math.random()* $auto.outerHeight();
        var dropRadius = 10;
        var strength = 0.01 + 0.01*0.01;

        $auto.ripples('drop', x , y, dropRadius, strength);
    },300);
})
