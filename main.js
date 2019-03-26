//document ready jquery
$(() => {
    
        $(`.flip-card-inner`).on(`click`, (e) => {
        var audio = document.getElementById("audio");
        audio.play();
        
    });


    let totalSeconds = 0;
    let totalMinutes =0;
    let interval = setInterval(setTime, 1000);
    
    function setTime() {
        ++totalSeconds;
        $(`.seconds`).text(`Seconds: ${totalSeconds}`);
        $(`.minutes`).text(`Minutes: ${totalMinutes}`);
    
        //temporarily stops timer at 5 seconds for my sanity
        if (totalSeconds === 59) {
            totalMinutes += 1;
            totalSeconds = 0;
        }
    };

    $('.flip-card').click(function() {
        $(this).toggleClass('active');
    });

    });
    
    

        // var audio2 = document.getElementById("audio-2");
        // audio2.play();
    
        




    // Possible implementation for button flipping - Still requires CSS
    // $('#flipto').on("click", function(event) {
    //   event.preventDefault();
    
    //   var face = $(this).data("face");
    
    //   if ( face == "bottom" ) {
    //     $(".cube").removeClass("flip-to-top").addClass("flip-to-bottom");
    //     $(this).data("face", "top").text("Flip: to top");
    //   } else {
    //     $(".cube").removeClass("flip-to-bottom").addClass("flip-to-top");
    //     $(this).data("face", "bottom").text("Flip: to bottom");
    //   }
  
