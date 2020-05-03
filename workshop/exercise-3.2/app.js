// ok. twenty buttons, you say.
// this should be as trivial as creating a five by four grid.
// start with 'green' class, swap with 'red' class

// coulda done this right in HTML, but whatever.
// Why do simple when you can do complicated?

for (i = 0; i <= 4; i++) {
    let rowCreater = document.createElement("div");
    rowCreater.setAttribute("class", "buttonRow");
    document.querySelector("#buttonBox").appendChild(rowCreater);
}

document.querySelectorAll(".buttonRow").forEach(function (row) {
    for (j = 0; j <= 3; j++) {
        let spanner = document.createElement("span");
        row.appendChild(spanner);
    }
})

document.querySelectorAll("span").forEach(function (item) {
    let buttonCreater = document.createElement("button");
    buttonCreater.innerText = "Button";
    item.appendChild(buttonCreater);
})

document.querySelectorAll("button").forEach(function (target) {
    target.addEventListener("click", function () {
        target.classList.toggle('greenButton');
    })
})