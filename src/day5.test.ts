import { parseStacks, parseCommands, findTopStacks } from './day5';
import { sample5 } from './inputs/input5';

describe('Day 5', () => {
  describe('parseStacks', () => {
    it('should parse input into stacks array', () => {
      expect(parseStacks(sample5.split('\n\n')[0])).toStrictEqual([
        ['Z', 'N'],
        ['M', 'C', 'D'],
        ['P'],
      ]);
    });
  });

  describe('parseCommands', () => {
    it('should parse second part of input into commands array', () => {
      expect(parseCommands(sample5.split('\n\n')[1])).toStrictEqual([
        { count: 1, from: 2, to: 1 },
        { count: 3, from: 1, to: 3 },
        { count: 2, from: 2, to: 1 },
        { count: 1, from: 1, to: 2 },
      ]);
    });
  });

  describe('findTopStacks', () => {
    it('should find top stacks', () => {
      expect(findTopStacks(sample5)).toBe('CMZ');
    });

    it('should find top stacks new model 9001', () => {
      expect(findTopStacks(sample5, true)).toBe('MCD');
    });
  });
});
