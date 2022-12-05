import { findTopStacks } from './day5';
import { input5 } from './inputs/input5';

console.log(
  `find top containers of stacks after move with old model:  ${findTopStacks(input5, false)}`,
);
console.log(
  `find top containers of stacks after move with new model:  ${findTopStacks(input5, true)}`,
);
