import 'bootstrap/dist/css/bootstrap.css'

import { FruitComponent } from './fruit-component';
import groceryStore from './grocery-store';

const $root = document.querySelector('#app');

// Nowy komponent
const myFruitComponent = new FruitComponent(groceryStore);
$root.append(myFruitComponent);

// Register on click event
document.addEventListener('click', () => {
    groceryStore.addRandomFruit(['mangoes', 'bananas', 'blueberries', 'lychees', 'strawberries']);

    myFruitComponent.updateFruitName();
})
