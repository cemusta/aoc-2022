import {
  countOverlappingRange,
  isContainedSection,
  sumOfContainedSections,
  sumOfOverlappingRanges,
} from './day4';
import { sample4 } from './inputs/input4';

describe('Day 4', () => {
  describe('isContainedSection', () => {
    it('should find if a section is conainted in another', () => {
      expect(isContainedSection('2-4,6-8')).toBe(false);
      expect(isContainedSection('2-3,4-5')).toBe(false);
      expect(isContainedSection('5-7,7-9')).toBe(false);
      expect(isContainedSection('2-8,3-7')).toBe(true);
      expect(isContainedSection('6-6,4-6')).toBe(true);
      expect(isContainedSection('2-6,4-8')).toBe(false);
    });
  });

  describe('sumOfContainedSections', () => {
    it('should return number of conainted sections in an input', () => {
      expect(sumOfContainedSections(sample4)).toBe(2);
    });
  });

  describe('countOverlappingRange', () => {
    it('should find if a section is conainted in another', () => {
      expect(countOverlappingRange('2-4,6-8')).toBe(0);
      expect(countOverlappingRange('2-3,4-5')).toBe(0);
      expect(countOverlappingRange('5-7,7-9')).toBe(1);
      expect(countOverlappingRange('2-8,3-7')).toBe(5);
      expect(countOverlappingRange('6-6,4-6')).toBe(1);
      expect(countOverlappingRange('2-6,4-8')).toBe(3);
    });
  });

  describe('sumOfOverlappingRanges', () => {
    it('should return number of conainted sections in an input', () => {
      expect(sumOfOverlappingRanges(sample4)).toBe(4);
    });
  });
});
