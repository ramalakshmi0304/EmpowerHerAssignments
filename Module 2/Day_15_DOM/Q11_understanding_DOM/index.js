
// 1. Change <h1> text
const heading=document.getElementById("title")
heading.innerText = "Welcome to the DOM World!"

// 2. Make all <p> text blue
const paras= document.getElementsByTagName('p');

for( let p of paras){
    p.style.color='blue';
}

// 3. Change first .container background
const containerDiv= document.querySelector('.container');
containerDiv.style.backgroundColor = 'yellow';