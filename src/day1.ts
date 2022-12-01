import { input1 } from './inputs/input1';

const elfCalories = input1.split('\n\n').map((arr) =>
  arr
    .split('\n')
    .map(Number)
    .reduce((a, b) => a + b, 0),
);

elfCalories.sort((a, b) => b - a);

const top3 = elfCalories.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(elfCalories[0]);

console.log(top3);
