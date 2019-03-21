//document ready jquery
$(() => {

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



})