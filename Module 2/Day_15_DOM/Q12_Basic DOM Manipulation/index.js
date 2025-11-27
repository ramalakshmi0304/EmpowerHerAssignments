
const list = document.querySelector('#items');
const button = document.querySelector('#btn');

button.addEventListener('click', function () {
    const newItem = document.createElement('li');

    const itemNumber = list.children.length + 1;
    newItem.textContent = "New Item" + itemNumber;

    if (itemNumber % 2 !== 0) {
        newItem.style.fontWeight = 'bold';
        newItem.style.color = 'blue';
    } else {

        newItem.style.fontWeight = 'italic';
        newItem.style.color = 'red';
    }

    list.appendChild(newItem);

});
