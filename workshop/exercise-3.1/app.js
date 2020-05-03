// ok. twenty buttons, you say.
// this should be as trivial as creating a five by four grid.
// start with 'green' class, swap with 'red' class

// coulda done this right in HTML, but whatever.
// Why do simple when you can do complicated?

let buttonHolder = document.createElement("div");
buttonHolder.setAttribute("id", "buttonHolder");
document.body.appendChild(buttonHolder);

for (let i = 0; i <= 4; i++) {
    let buttonRow = document.createElement("div");
    buttonRow.setAttribute("class", "buttonRow");
    document.querySelector("#buttonHolder").appendChild(buttonRow);
}

document.querySelectorAll(".buttonRow").forEach(function (row) {
    for (let j = 0; j <= 3; j++) {
        let buttonBox = document.createElement("span");
        buttonBox.setAttribute("class", "buttonBox");
        row.appendChild(buttonBox);
    }
});

document.querySelectorAll("span").forEach(function (item) {
    let buttonMaker = document.createElement("button");
    buttonMaker.innerText = "Press me";
    item.appendChild(buttonMaker);
});

document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.add("greenButton");
    })
});