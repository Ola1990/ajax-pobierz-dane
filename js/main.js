
$(function(){
    'use strict';
    var btn = $("button");
    
    btn.on("click", function(){
      
        
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
            $("#dane-programisty").html(data.imie + " " + data.nazwisko + " " + data.zawod + " " + data.firma);
        });
    });
});