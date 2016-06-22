var textArea = document.getElementById("textArea");
var textOutput = document.getElementById("textOutput");
var counter = 0;

var create = document.getElementById("create").addEventListener("click", function createButtonClick(event) {
    makeCard();
    console.log("textArea", textArea.value);
});


function makeCard() {
    var divElement = document.createElement("div"),
        lineElement = document.createElement("hr"),
        deleteButton = document.createElement("button"),
        buttonText = document.createTextNode("DELETER"),
        userInput = document.createTextNode(textArea.value);

    divElement.id = `domCard-${counter}`;
    divElement.appendChild(userInput);
    divElement.appendChild(lineElement);
    divElement.appendChild(deleteButton);
    divElement.classList.add("domCard");
    // console.log("divElement", divElement);

    deleteButton.appendChild(buttonText);
    deleteButton.id = `deleteDomCard-${counter}`;
    deleteButton.classList.add("deleteButton");
    textOutput.appendChild(divElement);
    counter++;
}

document.querySelector("body").addEventListener("click", function(event) {
    var deleteCard = event.target.classList.contains("deleteButton");
    if (deleteCard) {
        event.path[2].removeChild(event.target.parentNode);
        console.log("deleteCard", event.target.parentNode);
    }
});

function thatEnterKey() {
    if (event.which === 13) {
        console.log("textInputEl", textArea.value);
        console.log("you hit ENTER");
        makeCard();
    }
}
textArea.addEventListener("keyup", thatEnterKey);