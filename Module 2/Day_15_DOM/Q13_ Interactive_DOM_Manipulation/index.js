
const box= document.getElementById("box");
const colorInput=document.getElementById("colorInput");
const textinput= document.getElementById ("textinput");
const changebgbtn= document.getElementById("changebgbtn");
const textbtn= document.getElementById("textbtn");

changebgbtn.addEventListener("click", function(){
const color = colorInput.value.trim();
box.style.backgroundColor = color;

if (box.style.backgroundColor === ""){
    alert("Invalid color name");
}
});

textbtn.addEventListener("click", function(){

    const newText = textinput.value.trim();
    if (newText ===""){
         alert("Please enter some text!");
            } else {
                box.textContent = newText;
    }
    

});

