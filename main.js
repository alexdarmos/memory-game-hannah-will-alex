//document ready jquery
$(() => {
    let totalSeconds = 0;
    let totalMinutes =0;
    let interval, cardOne, cardTwo, selectedCardOne, selectedCardTwo;
    let clickCount = 0;
    let countDown = 5;
    
    $(`.flip-card-inner`).on(`click`, (e) => {
        var audio = document.getElementById("audio");
        audio.play();
        
    });
    

    //sets timer in the DOM
    function domTimer() {
        // $(`.seconds`).text(`Seconds: ${totalSeconds}`);
        // $(`.minutes`).text(`Minutes: ${totalMinutes}`);
        $(`.timer`).text(`Timer: ${totalMinutes}:${totalSeconds}`);
    };

    //sets countdown timer in DOM
    function domCountDown() {
        $(`.timer`).text(`Game Begins in: ${countDown} Seconds`);
    }

    //Keeps track of time it takes user to complete game
    function setTime() {
        //increments timer
        ++totalSeconds;
        //temporarily stops timer at 5 seconds for my sanity
        if (totalSeconds === 59) {
            totalMinutes += 1;
            totalSeconds = 0;
        }
        domTimer();  
    };

    //function to start game after 30 seconds- gives user time to memorize cards before they flip
    function delayStart() {
        console.log(`Start Game`);
        //start in-game timer
        interval = setInterval(setTime, 1000);
        //flip cards back to hidden
        flipCards($('.flip-card'));

    };

    //displays the count down timer before game actually starts
    function delayTimer() {
        if (countDown != 0) {
            --countDown;
            // console.log(`Count Down: ${countDown}`);
            
        } else {
            return;
        }domCountDown();
    };

    //compares cards based on the src, finds correctly matching cards, **need way to stop user from selecting same card twice** 
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
            cardOne = e.currentTarget.children[2].lastElementChild.src;
            console.log(cardOne);
            console.log(e.delegateTarget.offsetParent);
            selectedCardOne = e.delegateTarget.offsetParent;
        } else {
            
            cardTwo = e.currentTarget.children[2].lastElementChild.src;
            selectedCardTwo = e.delegateTarget.offsetParent;
            console.log(cardTwo);
        }

        if( selectedCardOne != selectedCardTwo) {
            if(clickCount === 2) {
                if(cardOne === cardTwo) {
                    console.log(`Match!`);
                } else {
                    console.log(`Mismatch!`);
                }
            }
    }   else {
        return;
    }
    };

    //function to flip all cards at beginning
    function flipCards(target) {
        $(target).toggleClass('active');
    };

    function shuffle(array) {
        let length = array.length;
        let random;
        let index;
    
    // While there are elements in the array
        while (length > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * length);
    // Decrease length by 1
            length--;
    // Swap the array elements 
            random = array[length];
            array[length] = array[index];
            array[index] = random;
        }
        //Return a random element
        return random;
    }

    //event listener to flip card animation on click
    $('.flip-card').click(function() {
        $(this).toggleClass('active');
    });


    //start game
    $(`#Start`).on(`click`, (e) => {
        console.log(`Game Starting, 30 second delay started`); 
        //function to delay start of game by 30 seconds
        setTimeout(delayStart, 5000);
        //Countdown 30 second timer before game start
        setInterval(delayTimer, 1000);
        $('.card-container').css('display', 'flex');
        $('.opening-video').css('display', 'none');
        $('.Start-Reset').css('justify-content', 'center');
        $('.Start-Reset').css('margin-left', '0px');


        flipCards($('.flip-card'));

        
    });

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

    //event listener for user card selection
    $(`.flip-card-inner`).on(`click`, (e) => {
        //compare cards on click
        compareCards(e);
        //plays audio on click
        var audio = document.getElementById("audio");
        audio.play();
        // console.log(e);
    });

    // function play(){
    //     // var audio = document.getElementById("audio");
    //     // audio.play();

    //     // var audio2 = document.getElementById("audio-2");
    //     // audio2.play();
    //     }

    //event listener to flip card animation
    
 
    
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


//     $(document).ready (() => {


//         function hidden() {
        
    
    
    
//         $('#grow-me').addClass('big');
//         $('#shrink-me').removeClass('big');
//         console.log($('li'));
//         $('.link').attr('href', 'https://www.example.com');
//         $('.link').text('somewhere');
//         $('#hide-me').css('display', 'none');
//         $('#show-me').css('display', 'block');
    
//         $('#name').insertBefore('Welcome');
        
//     }$("#action").on("click", hidden);
        
    
//     });    
  
var div = document.getElementById('falcon');
			document.addEventListener('mousemove',function(e) {			
				div.style.left = e.pageX+"px";
				div.style.top = e.pageY+"px";
			});

});