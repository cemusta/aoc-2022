import { calculateFolderSizes, findFoldersBySize, populateFileSystem } from './day7';
import { sample7 } from './inputs/input7';

describe('Day 7', () => {
  describe('populateFileSystem and calculateFolderSizes', () => {
    it('should populate fs topology with folder sizes correctly', () => {
      const fs = populateFileSystem(sample7);
      calculateFolderSizes(fs);
      expect(fs.size).toBe(48381165);
      expect(fs.children.find((folder) => folder.name === 'a').size).toBe(94853);
      expect(fs.children.find((folder) => folder.name === 'd').size).toBe(24933642);
    });
  });

  describe('findFoldersBySize', () => {
    it('should find folders smaller than 100000', () => {
      const fs = populateFileSystem(sample7);
      calculateFolderSizes(fs);
      expect(findFoldersBySize(fs, 100000)).toStrictEqual([
        { name: 'a', size: 94853 },
        { name: 'e', size: 584 },
      ]);
    });
  });

  it('should find folders smaller than 1000', () => {
    const fs = populateFileSystem(sample7);
    calculateFolderSizes(fs);
    expect(findFoldersBySize(fs, 1000)).toStrictEqual([{ name: 'e', size: 584 }]);
  });

  it('should find folders bigger than 100000', () => {
    const fs = populateFileSystem(sample7);
    calculateFolderSizes(fs);
    expect(findFoldersBySize(fs, 100000, false)).toStrictEqual([{ name: 'd', size: 24933642 }]);
  });
});
