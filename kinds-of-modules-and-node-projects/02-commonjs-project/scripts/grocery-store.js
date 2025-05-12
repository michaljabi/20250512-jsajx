const _ = require('lodash');

const fruits = ['apples', 'cherries', 'berries'];

module.exports = {
    getLastFruit: () => _.last(fruits),
    addRandomFruit(listOfFruits) {
        const sampleFruit = _.sample(listOfFruits);
        fruits.push(sampleFruit);
    }
}

// Również można by było zapisać tak:

// exports.getLastFruit: () => ....

// exports.addRandomFruit(listOfFruits) { ....
