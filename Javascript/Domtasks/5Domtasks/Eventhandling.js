let paragraph = document.createElement("p");
let button = document.createElement("button");

paragraph.textContent = "To change the text click the below button";
button.textContent = "Change Text"

document.body.appendChild(paragraph);
document.body.appendChild(button);

button.addEventListener("click",change);
function change(){
   paragraph.textContent = "the text has been changed";
}
