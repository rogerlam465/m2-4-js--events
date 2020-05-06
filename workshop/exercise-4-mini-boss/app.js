let mainContain = document.createElement("div");
// strictly probably not necessary, but I like having the handles
mainContain.setAttribute("id", "mainContain");
document.body.appendChild(mainContain);

let gameStartBut = document.createElement("button");
gameStartBut.setAttribute("class", "gameStartBut");
gameStartBut.innerText = "Game Start?";
document.querySelector("#mainContain").appendChild(gameStartBut);

document.querySelector(".gameStartBut").addEventListener("click", function () {
    spawnGameGrid();
});

function spawnGameGrid() {

    document.querySelector(".gameStartBut").remove();

    // we're gonna flex grid up all in this house

    // creating spaceholder grid
    // rows

    for (let i = 0; i <= 14; i++) {
        let rowBoy = document.createElement("div");
        rowBoy.setAttribute("class", "rowBoy");
        rowBoy.setAttribute("display", "flex");
        document.querySelector("#mainContain").appendChild(rowBoy);

        //columns

        for (let j = 0; j <= 24; j++) {
            let buttonContainer = document.createElement("span");
            buttonContainer.setAttribute("id", "contain-" + i + "-" + j);
            rowBoy.appendChild(buttonContainer);
        }
    }

    // generate buttons

    let randomChallenge = Math.floor(Math.random() * 20) + 10;

    for (let i = 1; i <= randomChallenge; i++) {
        let testCoords = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 25)];
        while (document.querySelector("#contain-" + testCoords[0] + "-" + testCoords[1]).hasChildNodes() === true) {
            testCoords = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 25)];
        }
        let buttonGuy = document.createElement("button");
        buttonGuy.setAttribute("class", "gameButton");
        document.querySelector("#contain-" + testCoords[0] + "-" + testCoords[1]).appendChild(buttonGuy);
    }

    function greenIt() {
        this.classList.toggle("greenify");
    }

    document.querySelectorAll(".gameButton").forEach(function (item) {
        item.addEventListener("click", greenIt)
    });

    // timer allows 0.7 seconds per button

    let timeDisplay = document.createElement("span");
    timeDisplay.setAttribute("id", "timeDisplay");
    document.body.appendChild(timeDisplay);

    let randoTimer = randomChallenge * 700;
    let countdown = 0;
    let gameCount = 0;

    function gameEnd() {
        document.querySelectorAll(".gameButton").forEach(function (item) {
            item.removeEventListener("click", greenIt);
        })
        clearInterval(gameTime);
    }

    let gameTime = setInterval(function () {
        document.querySelector("#timeDisplay").innerText = (randoTimer - countdown) / 1000;
        countdown += 100;
        gameCount = document.querySelectorAll(".greenify").length;
        if (countdown >= randoTimer) {
            document.querySelector("#timeDisplay").innerText = "You lose!"
            gameEnd()
        } else if (gameCount === randomChallenge) {
            document.querySelector("#timeDisplay").innerText = "You win!"
            gameEnd()
        }
    }, 100);

}