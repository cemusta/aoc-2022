import { isArrayUnique, findStartOfPacket } from './day6';

describe('Day 6', () => {
  describe('isArrayUnique', () => {
    it('should detect arrays with unique elements', () => {
      expect(isArrayUnique(['a', 'a', 'b'])).toBe(false);
      expect(isArrayUnique(['a', 'z', 'b'])).toBe(true);
    });
  });

  describe('findStartOfPacket', () => {
    it('should find first 4 chars index thats unique in a row', () => {
      expect(findStartOfPacket('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
      expect(findStartOfPacket('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
      expect(findStartOfPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
      expect(findStartOfPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
    });
  });

  describe('findStartOfPacket', () => {
    it('should find first 17 chars index thats unique in a row', () => {
      expect(findStartOfPacket('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
      expect(findStartOfPacket('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
      expect(findStartOfPacket('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
      expect(findStartOfPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
      expect(findStartOfPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
    });
  });
});
