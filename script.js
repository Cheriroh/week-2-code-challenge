
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];


const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-item');
const clearButton = document.getElementById('clear-list');
const shoppingListContainer = document.getElementById('shopping-list');


function renderList() {
    shoppingListContainer.innerHTML = ''; 
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        if (item.purchased) {
            li.classList.add('purchased');
        }

        
        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            updateLocalStorage();
            renderList(); 
        });

        shoppingListContainer.appendChild(li);
    });
}


function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText) {
        shoppingList.push({ text: itemText, purchased: false });
        itemInput.value = ''; 
        updateLocalStorage();
        renderList();
    }
}


function clearList() {
    shoppingList = [];
    updateLocalStorage();
    renderList();
}


function updateLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}


addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);


renderList();
