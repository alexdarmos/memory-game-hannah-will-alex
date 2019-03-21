//document ready jquery
$(() => {
    let totalSeconds = 0;
    let totalMinutes =0;
    let interval;
    // let interval = setInterval(setTime, 1000);


    // function stopTime(intervalParam) {
    //     clearInterval(intervalParam);
    // }

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


    $(`#Start`).on(`click`, (e) => {
        console.log(e); 
        // setTime();
        interval = setInterval(setTime, 1000);
    })

    $(`#Reset`).on(`click`, (e) => {
        console.log(e);
        clearInterval(interval);
        totalSeconds = 0;
        totalMinutes = 0;

        
    });


    

    
})