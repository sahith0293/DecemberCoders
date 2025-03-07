// 1) Change Background Color
function changeBackground() {
    document.getElementById("myElement").style.backgroundColor = "lightblue";
}

// 2) Select Elements by Class and Log to Console
function logClassElements() {
    let elements = document.getElementsByClassName("myClass");
    console.log(elements);
}

// 3) Change Text Content
function changeText() {
    document.getElementById("textElement").textContent = "New text content!";
}

// 4) Create and Append a New Element
function addParagraph() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    document.getElementById("container").appendChild(newParagraph);
}

// 5) Remove an Element by ID
function removeElement() {
    let element = document.getElementById("removeMe");
    if (element) {
        element.parentNode.removeChild(element);
    }
}

// 6) Style an Element
function styleElement() {
    let element = document.getElementById("styleMe");
    element.style.color = "red";
    element.style.fontSize = "24px";
    element.style.margin = "20px";
}
