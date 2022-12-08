import { input7, sample7 } from './inputs/input7';

export const diskLimit = 70000000;
export const programNeeds = 30000000;

enum FileType {
  File = 'File',
  Directory = 'Directory',
}

type FileEntry = {
  name: string;
  type: FileType;
  size: number;
  children: FileEntry[];
  parent: FileEntry | null;
};

export const populateFileSystem = (input: string) => {
  const lines = input.split('\n');

  lines.shift(); // remove the first line
  const root: FileEntry = {
    name: '/',
    type: FileType.Directory,
    size: 0,
    children: [],
    parent: null,
  };

  let currentDirectory: FileEntry = root;

  while (lines.length > 0) {
    const line = lines.shift();

    if (line === '$ cd ..') {
      // go up one directory
      if (currentDirectory.parent) {
        currentDirectory = currentDirectory.parent;
      }
    } else if (line.startsWith('$ cd ')) {
      // go into a directory
      const directoryName = line.split(' ')[2];
      const directory = currentDirectory.children.find((child) => child.name === directoryName);
      if (directory) {
        currentDirectory = directory;
      }
    } else if (line.startsWith('$ ls')) {
      // list the contents of the current directory
      while (lines.length > 0 && !lines[0].startsWith('$')) {
        const [size, name] = lines.shift().split(' ');

        currentDirectory.children.push({
          name,
          type: size === 'dir' ? FileType.Directory : FileType.File,
          size: size === 'dir' ? 0 : Number(size),
          children: [],
          parent: currentDirectory,
        });
      }
    }
  }

  return root;
};

const printFile = (fs: FileEntry, depth: number = 0) => {
  console.log(`${'   '.repeat(depth)}- ${fs.name} (file, size=${fs.size})`);
};

const printDir = (fs: FileEntry, depth: number = 0) => {
  console.log(`${'   '.repeat(depth)}- ${fs.name} (dir, dirsize=${fs.size})`);
};

export const printFs = (fs: FileEntry) => {
  const print = (fs: FileEntry, depth: number = 0) => {
    if (fs.type === FileType.File) {
      printFile(fs, depth);
    } else {
      printDir(fs, depth);
      fs.children.forEach((child) => print(child, depth + 1));
    }
  };

  print(fs);
};

export const calculateFolderSizes = (fs: FileEntry) => {
  const calculate = (fs: FileEntry): number => {
    if (fs.type === FileType.File) {
      return fs.size;
    } else {
      const size = fs.children.reduce((acc, child) => acc + calculate(child), 0);
      fs.size = size;
      return size;
    }
  };

  fs.size = calculate(fs);
  return fs;
};

export const findFoldersBySize = (fs: FileEntry, limit: number, smaller: boolean = true) => {
  const find = (fs: FileEntry, limit: number): FileEntry[] => {
    if (fs.type === FileType.File) {
      return [];
    } else {
      const folders = fs.children.filter((child) => child.type === FileType.Directory);
      const foldersWithSize = smaller
        ? folders.filter((folder) => folder.size < limit)
        : folders.filter((folder) => folder.size > limit);
      const foundSubFolders = folders.map((folder) => find(folder, limit));
      return [...foldersWithSize, ...foundSubFolders.flat()];
    }
  };

  return find(fs, limit).map((folder) => ({
    name: folder.name,
    size: folder.size,
  }));
};
