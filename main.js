//document ready jquery
$(() => {
    let totalSeconds = 0;
    let totalMinutes =0;
    let interval;
    let clickCount = 0;
    let cardOne, cardTwo;

    //sets timer in the DOM
    function domTimer() {
        $(`.seconds`).text(`Seconds: ${totalSeconds}`);
        $(`.minutes`).text(`Minutes: ${totalMinutes}`);
    };

    //increments time
    function setTime() {
        ++totalSeconds;
        //temporarily stops timer at 5 seconds for my sanity
        if (totalSeconds === 59) {
            totalMinutes += 1;
            totalSeconds = 0;
        }
        domTimer();  
    };

    function compareCards(e) {
        //track number of clicks
        ++clickCount;
        //limit click count to 2
        while(clickCount > 2) {
            clickCount = 0;
            ++clickCount;
        }
        // console.log(clickCount);

        if(clickCount === 1) {
            cardOne = e.target.innerText;
            console.log(cardOne);
        } else {
            cardTwo = e.target.innerText;
            console.log(cardTwo);
        }

        if(clickCount === 2) {
            if(cardOne === cardTwo) {
                console.log(`Match!`);
            } else {
                console.log(`Mismatch!`);
            }
        }
    };

    //start game
    $(`#Start`).on(`click`, (e) => {
        console.log(`Game Started`); 

        //start timer
        interval = setInterval(setTime, 1000);
    })

    //reset game
    $(`#Reset`).on(`click`, (e) => {
        console.log(`Game Reset`);
        //pause timer
        clearInterval(interval);
        //reset timer
        totalSeconds = 0;
        totalMinutes = 0; 
        //reset timer in dom
        domTimer();  

    });

    $(`.flip-card`).on(`click`, (e) => {
        //compare cards on click
        compareCards(e);
        var audio = document.getElementById("audio");
        audio.play();
        console.log(e);
    });

    // function play(){
    //     // var audio = document.getElementById("audio");
    //     // audio.play();

    //     // var audio2 = document.getElementById("audio-2");
    //     // audio2.play();
    //     }

    $('.flip-card').click(function() {
        $(this).toggleClass('active');
    });
 
    
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
  

});
