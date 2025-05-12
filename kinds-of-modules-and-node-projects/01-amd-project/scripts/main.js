const $root = document.querySelector('#root');

requirejs(["grocery-store", "fruit-component"], function(groceryStore, FruitComponent) {
    
    // Nowy komponent 
    const myFruitComponent = new FruitComponent(groceryStore);
    $root.appendChild(myFruitComponent);
    
    // Register on click event
    document.addEventListener('click', function() {
        groceryStore.addRandomFruit(['mangoes', 'bananas', 'lychees', 'strawberries']);
        
        myFruitComponent.updateFruitName();
    })
});