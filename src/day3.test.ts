import { findBadge, findCommonItem, itemPriority, sumOfBadges, sumOfPriorities } from './day3';
import { sample3 } from './inputs/input3';

describe('Day 3', () => {
  describe('itemPriority', () => {
    it('should return correct item priority', () => {
      expect(itemPriority('a')).toBe(1);
      expect(itemPriority('g')).toBe(7);
      expect(itemPriority('z')).toBe(26);
      expect(itemPriority('A')).toBe(27);
      expect(itemPriority('G')).toBe(33);
      expect(itemPriority('Z')).toBe(52);
    });
  });
  describe('findCommonItem', () => {
    it('should find common item in compartments', () => {
      const lines = sample3.split('\n');
      expect(findCommonItem(lines[0])).toBe('p');
      expect(findCommonItem(lines[1])).toBe('L');
      expect(findCommonItem(lines[2])).toBe('P');
      expect(findCommonItem(lines[3])).toBe('v');
      expect(findCommonItem(lines[4])).toBe('t');
      expect(findCommonItem(lines[5])).toBe('s');
    });
  });

  describe('sumOfPriorities', () => {
    it('should return sum of item priorities', () => {
      expect(sumOfPriorities(sample3)).toBe(157);
    });
  });

  describe('findBadge', () => {
    it('should find badges for team of 3 elves', () => {
      const lines = sample3.split('\n');
      expect(findBadge(lines[0].split(''), lines[1].split(''), lines[2].split(''))).toBe('r');
      expect(findBadge(lines[3].split(''), lines[4].split(''), lines[5].split(''))).toBe('Z');
    });
  });

  describe('sumOfBadges', () => {
    it('should find sum of badge values', () => {
      expect(sumOfBadges(sample3)).toBe(70);
    });
  });
});
