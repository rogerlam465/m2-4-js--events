// start by populating current time

let rawDate = new Date();
let currTime = rawDate.toLocaleTimeString();

let currTimeNode = document.createElement("span");
currTimeNode.setAttribute("id", "currentTimeDisplay");
currTimeNode.innerText = currTime;

document.querySelector("#currentTime").appendChild(currTimeNode);

setInterval(function () {
    rawDate = new Date();
    currTime = rawDate.toLocaleTimeString();
    document.querySelector("#currentTimeDisplay").innerText = currTime;
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
let stopwatchTimer;

let timeArr = ["", "", ""];

timeArr.forEach(function (timeVal) {
    let li = document.createElement("li");
    li.innerText = timeVal;
    document.querySelector("#stopwatchCounter").appendChild(li);
});

function setTimer() {

    // init variables

    let timeCount = 0;
    let secondsCounter = 0;
    let minuteCounter = 0;

    stopwatchTimer = setInterval(function () {
        timeCount += 10;

        document.querySelector("#stopwatchTrigger").innerText = "Reset";

        if (timeCount > 990) {
            secondsCounter++;
            timeCount = 0;
        }

        if (secondsCounter > 59) {
            minuteCounter++;
            secondsCounter = 0;
        }

        // I don't like just concaten...conca... sticking 'em together
        // the animation makes the whole thing vibrate like a coke machine having a fit
        // let's build an array of li elements and iter...ita... go through 'em in order

        timeArr = [padZero(minuteCounter), padZero(secondsCounter), padZero(timeCount / 10)];

        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll("li")[i].innerText = timeArr[i];
        }

    }, 10);
}

function killTimer() {
    document.querySelector("#stopwatchTrigger").innerText = "Start";
    clearInterval(stopwatchTimer);
}

document.querySelector("#stopwatchTrigger").addEventListener("click", function () {
    stopwatchState = !stopwatchState;

    if (stopwatchState === false) {
        killTimer();
    } else {
        setTimer();
    }
});

// let's build a timer. Not an egg timer, just a timer
// you know what? I'm not the boss of you. Time your eggs. You do you.

let timerState = false;
let eggTimer;

function setEggTimer(time) {
    let eggCount = time;
    document.querySelector("#timerDisplay").innerText = eggCount;
    document.querySelector("#timerTrigger").innerText = "Reset Timer";

    eggTimer = setInterval(function () {
        if (eggCount < 1) {
            alert("Time's up, Mr. Bond.");
            clearInterval(eggTimer);
        } else {
            eggCount--;
            document.querySelector("#timerDisplay").innerText = eggCount;
        }
    }, 1000);
}

function killEggTimer() {
    document.querySelector("#timerTrigger").innerText = "Start Timer";
    document.querySelector("#secondsInput").style.visibility = "visible";
    clearInterval(eggTimer);
}

document.querySelector("#timerTrigger").addEventListener("click", function () {
    timerState = !timerState;

    let timerVal = document.querySelector("#secondsInput").value;
    document.querySelector("#secondsInput").value = "";

    if (timerState === false) {
        killEggTimer();
    } else {
        document.querySelector("#secondsInput").style.visibility = "hidden";
        setEggTimer(timerVal);
    }

});

