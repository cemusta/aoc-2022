import { countElfCalories } from './day1';
import { sample1 } from './inputs/input1';

describe('Day 1', () => {
  describe('countElfCalories', () => {
    it('should return sorted array of elf calories', () => {
      const array = countElfCalories(sample1);

      expect(array[0]).toBe(24000);
      expect(array.slice(0, 3).reduce((a, b) => a + b, 0)).toBe(45000);
    });
  });
});
