//document ready jquery
$(() => {

let totalSeconds = 0;
let interval = setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    console.log(totalSeconds);
    //temporarily stops timer at 5 seconds for my sanity
    if (totalSeconds === 5) {
        clearInterval(interval);
    }
};

})