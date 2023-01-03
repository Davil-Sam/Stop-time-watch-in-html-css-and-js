
var mins = 0;
var sec = 0;
var count = 0;

var timer = false;



function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    // hr = 0;
    mins = 0;
    sec = 0;
    count = 0;

    document.getElementById('mins').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            mins = mins + 1;
            sec = 0;
        }

        if (mins == 60) {
            // hr = hr+1;
            mins = 0;
        }


        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        document.getElementById("mins").innerHTML = mins;
        setTimeout("stopwatch()", 10);
    }
}