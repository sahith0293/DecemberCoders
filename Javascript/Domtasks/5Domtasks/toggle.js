let paragraph = document.createElement("p");
let button = document.createElement("button");
let style = document.createElement("style");

paragraph.textContent = "To change the text click the below button";
button.textContent = "Change Text";
style.textContent = `.highlight{
    background-color:red;
    font-weight: bold;
}`;
document.head.appendChild(style);
document.body.appendChild(paragraph);
document.body.appendChild(button);



button.addEventListener("click",change);
function change(){
   paragraph.classList.toggle("highlight")
}
