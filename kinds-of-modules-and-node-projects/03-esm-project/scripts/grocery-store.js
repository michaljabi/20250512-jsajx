import _ from 'https://esm.sh/lodash';

const fruits = ['apples', 'cherries', 'berries'];

export default {
    getLastFruit: () => _.last(fruits),
    addRandomFruit(listOfFruits) {
        const sampleFruit = _.sample(listOfFruits);
        fruits.push(sampleFruit);
    }
}
