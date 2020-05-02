// start by populating current time

let currTimeNode = document.createElement("span");
currTimeNode.setAttribute("id", "currentTime");

let rawDate = new Date();
let currTime = rawDate.toLocaleTimeString();
document.querySelector("#currentTime").innerText = currTime;

setInterval(function () {
    rawDate = new Date();
    currTime = rawDate.toLocaleTimeString();
    document.querySelector("#currentTime").innerText = currTime;
}, 1000)

// STOP! HAMMER TIME.
// no, no, sorry, my mistake, it's actually stopwatch time, terribly sorry.

// pad with zeros when appropriate

function padZero(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

let stopwatchState = false;

document.querySelector("#stopwatchTrigger").addEventListener("click", function () {
    // when we click the button, we should check the state
    // if it's running, we want to clearInterval()
    // if it ain't running, we want to start an interval timer

    stopwatchState = !stopwatchState;

    // init variables

    let timerCounter = 0;
    let secondsCounter = 0;
    let minuteCounter = 0;

    let timeRun = setInterval(function () {

        if (stopwatchState === false) {
            clearInterval(timeRun);
            document.querySelector("#stopwatchTrigger").innerText = "Start";
        } else {

            document.querySelector("#stopwatchTrigger").innerText = "Reset";

            timerCounter += 10;

            if (timerCounter > 990) {
                secondsCounter++;
                timerCounter = 0;
            }

            if (secondsCounter > 60) {
                minuteCounter++;
                secondsCounter = 0;
            }

            timeStr = padZero(minuteCounter) + ":" + padZero(secondsCounter) + ":" + padZero(timerCounter);

            document.querySelector("#stopwatchCounter").innerText = timeStr;

        }
    }, 10);
});

// let's build a timer. Not an egg timer, just a timer
// you know what? I'm not the boss of you. Time your eggs. You do you.

document.querySelector("#timerTrigger").addEventListener("click", function () {
    // the user had better put in a numerical value or SO HELP ME
    let timerVal = document.querySelector("#secondsInput").value;

    console.log(timerVal);

    let eggTimer = setInterval(function () {

        timerVal -= 1;

        if (timerVal <= 0) {
            alert("Time's up!");
            clearInterval(eggTimer);
        }

        console.log(timerVal);

    }, 1000);


});