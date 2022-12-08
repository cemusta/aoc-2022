import {
  calculateFolderSizes,
  diskLimit,
  findFoldersBySize,
  populateFileSystem,
  printFs,
  programNeeds,
} from './day7';
import { input7, sample7 } from './inputs/input7';

const fs = populateFileSystem(input7);
calculateFolderSizes(fs);
const res = findFoldersBySize(fs, 100000).reduce((acc, folder) => acc + folder.size, 0);
const needToDelete = programNeeds - (diskLimit - fs.size);

const folders = findFoldersBySize(fs, needToDelete, false).sort((a, b) => a.size - b.size);

console.log(`sum of folders size smaller than 100K: ${res}`);
console.log(`need to clear space more than: ${needToDelete}, smallest one is: ${folders[0].size}`);
