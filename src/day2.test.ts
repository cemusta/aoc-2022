import { totalScore } from './day2';
import { sample2 } from './inputs/input2';

describe('Day 2', () => {
  describe('totalScore', () => {
    it('should return correct Tourney Scores', () => {
      expect(totalScore(sample2, false)).toBe(15);
      expect(totalScore(sample2, true)).toBe(12);
    });
  });
});
