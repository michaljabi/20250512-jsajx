// To jest nasz moduł.

// Łączymy użycie namespace, gdzie stała globalna to: groceryService
// razem z IIFE - w którym zamykamy logikę działania serwisu.

const groceryService = (() => {
    
    const fruits = ['apples', 'cherries', 'berries'];
    
    return {
        getLastFruit() {
            return _.last(fruits);
        },
        addRandomFruit: function(listOfFruits) {
            const sampleFruit = _.sample(listOfFruits);
            fruits.push(sampleFruit);
        }
    }
})();