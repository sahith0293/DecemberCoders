let box = document.createElement("div")
let style = document.createElement("style")
let button = document.createElement("button")

document.head.appendChild(style);
document.body.appendChild(box);
document.body.appendChild(button);

box.textContent="my name is sahith"
box.classList.add("box")
button.textContent="toggle button"
style.textContent = `.box{
border:1px solid black;
background-color:red;
color:white
}`

button.addEventListener("click",dynamic)
function dynamic(){
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
    
}

