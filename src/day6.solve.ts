import { findStartOfPacket } from './day6';
import { input6 } from './inputs/input6';

console.log(`first start of packet marker: ${findStartOfPacket(input6)}`);
console.log(`first start of messg. marker: ${findStartOfPacket(input6, 14)}`);
