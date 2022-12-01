import { countElfCalories } from './day1';
import { input1 } from './inputs/input1';

const result = countElfCalories(input1);
console.log(`highest calories: ${result[0]}`);
console.log(`top 3: ${result.slice(0, 3).reduce((a, b) => a + b, 0)}`);
