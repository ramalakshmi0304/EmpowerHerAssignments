import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";


// 1. Classic (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

console.log(
    boxen(message,{
        title: title,
        padding:1,
        margin:1,
        borderStyle:"singleDouble"
    })
);

console.log(
    boxen(message,{
        title:title,
        padding:1,
        margin:1,
        borderStyle:"round"
    })
);