import { FruitComponent } from './fruit-component.js'
import groceryStore from './grocery-store.js'

const $root = document.querySelector('#root');

// Nowy komponent 
const myFruitComponent = new FruitComponent(groceryStore);
$root.appendChild(myFruitComponent);

// Register on click event
document.addEventListener('click', function() {
    groceryStore.addRandomFruit(['mangoes', 'bananas', 'lychees', 'strawberries']);
    
    myFruitComponent.updateFruitName();
})
