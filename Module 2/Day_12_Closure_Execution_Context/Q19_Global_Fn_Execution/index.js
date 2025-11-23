let age=25;
function displayAge(){
    console.log("Age is", age);
}
function changeAge(newAge){
age=newAge;
console.log("Age updated to:", age);

}
displayAge();
changeAge(30);