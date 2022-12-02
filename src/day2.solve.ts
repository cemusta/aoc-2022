import { totalScore } from './day2';
import { input2 } from './inputs/input2';

console.log(`total Tourney Score (w/o. strategy): ${totalScore(input2, false)}`);
console.log(`total Tourney Score (with strategy): ${totalScore(input2, true)}`);
