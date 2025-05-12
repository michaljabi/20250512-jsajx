// This is our module logic:

define(['../lib/lodash'], (_) => {

    const fruits = ['apples', 'cherries', 'berries'];

    return {
        getLastFruit() {
            return _.last(fruits);
        },
        addRandomFruit(listOfFruits) {
            const sampleFruit = _.sample(listOfFruits);
            fruits.push(sampleFruit);
        }
    }
});
