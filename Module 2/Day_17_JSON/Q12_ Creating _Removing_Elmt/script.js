const container= document.getElementById("container")
const addbtn= document.getElementById("addbtn")
const removebtn= document.getElementById("removebtn")

addbtn.addEventListener('click',()=>{

    const p= document.createElement("p");
    p.textContent="This is a new paragraph";
    container.appendChild(p);

})

removebtn.addEventListener('click',()=>{

    if(container.lastChild){
        container.removeChild(container.lastChild);
    }
})
