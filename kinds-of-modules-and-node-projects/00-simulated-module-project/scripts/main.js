const $root = document.querySelector('#root');


const myFruitComponent = new FruitComponent(groceryService);
$root.appendChild(myFruitComponent);

// Register on click event
document.addEventListener('click', () => {
    groceryService.addRandomFruit(['mangoes', 'bananas', 'lychees', 'strawberries']);
    
    myFruitComponent.updateFruitName();
})
