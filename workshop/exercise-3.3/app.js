// so I'm thinking that I should create an array full of x-y coordinates
// we can use the height and width of buttons to determine a bunch of no-go zones

let initLocArray = [];

// suppose we generate a button, with the starting X, Y coordinates
// we store the X, Y coordinates in an array
// the next time we create a button, we should make sure
// that the new X, Y are more than 30 pixels away from X and Y

function testCollision(coord) {
    let testX;
    let testY;

    if (initLocArray.length === 0) {
        return false;
    }

    // this should work, but it doesn't work, and I'm tired of dealing with it now.

    initLocArray.forEach(function (arrayCoords) {
        if (coord[0] <= arrayCoords[0] - 30 && coord[0] >= arrayCoords[0] + 30) {
            testX = true;
        }

        if (coord[1] <= arrayCoords[1] - 30 && coord[1] >= arrayCoords[1] + 30) {
            testY = true;
        }
    })

    if (testX === true && testY === true) {
        return true;
    } else {
        return false;
    }
}

let counter = 0;

function generateCoords() {
    let coords = [Math.floor(Math.random() * 900), Math.floor(Math.random() * 500)];
    while (testCollision(coords) != false) {
        coords = [Math.floor(Math.random() * 900), Math.floor(Math.random() * 500)];
    }
    initLocArray.push(coords);
}

for (let i = 0; i <= 19; i++) {
    let createButton = document.createElement("button");
    createButton.style.position = "absolute";
    createButton.setAttribute("id", "button-" + i);
    generateCoords();
    createButton.style.left = initLocArray[i][0] + "px";
    createButton.style.top = initLocArray[i][1] + "px";
    document.querySelector("#buttonbox").appendChild(createButton);
}

document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.toggle("greenify");
    })
});

console.log(initLocArray);