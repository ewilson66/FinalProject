$(document).ready(function(){
    $(".modal-button").click(function(){
      $(".modal").toggle().animate({
        opacity: "1",
      }, 1000)
    });
    $(".modal-background").click(function(){
      $(".modal").toggle().css("opacity", "0");
    })
    $(".modal-close").click(function(){
      $(".modal").toggle().css("opacity", "0");
    })
     })
     