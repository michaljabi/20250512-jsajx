const { FruitComponent } = require('./fruit-component');
const groceryStore = require('./grocery-store.js')

const $root = document.querySelector('#root');

// Nowy komponent 
const myFruitComponent = new FruitComponent(groceryStore);
$root.appendChild(myFruitComponent);

// Register on click event
document.addEventListener('click', () => {
    groceryStore.addRandomFruit(['mangoes', 'bananas', 'lychees', 'strawberries']);
    
    myFruitComponent.updateFruitName();
})
