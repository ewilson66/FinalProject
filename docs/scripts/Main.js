$(document).ready(function()  {

    console.log("Yo!!");
    $(".center").addClass("animated wobble")


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
    
    $(document).ready(function(){
  
        $(window).scroll(function(){
          if($(window).scrollTop() > 1500) {
            $(".effect").show().animate({
              opacity: "1"
         }, 1000)
           }
         })
         })


      $(document).ready(function(){
  
        $(window).scroll(function(){
          if($(window).scrollTop() > 1500) {
            $(".effect").show().animate({
              opacity: "1"
         }, 1000)
           }
         })
        
        
        
      })

// add javascript for sroll event here


});


