type Section = {
  start: number;
  end: number;
};

export const isContainedSection = (line: string): boolean => {
  const [firstPart, secondPart] = line.split(',').map((x) => x.split('-').map(Number));

  const first: Section = {
    start: firstPart[0],
    end: firstPart[1],
  };
  const second: Section = {
    start: secondPart[0],
    end: secondPart[1],
  };

  if (
    (first.start <= second.start && first.end >= second.end) ||
    (second.start <= first.start && second.end >= first.end)
  ) {
    return true;
  }

  return false;
};

export const sumOfContainedSections = (input: string): number => {
  const lines = input.split('\n');
  return lines.reduce((acc, line) => {
    return acc + (isContainedSection(line) ? 1 : 0);
  }, 0);
};

export const countOverlappingRange = (line: string): number => {
  const [firstPart, secondPart] = line.split(',').map((x) => x.split('-').map(Number));

  const first: Section = {
    start: firstPart[0],
    end: firstPart[1],
  };
  const second: Section = {
    start: secondPart[0],
    end: secondPart[1],
  };

  let count = 0;
  if (first.end >= second.start || second.end >= first.start) {
    for (let i = first.start; i <= first.end; i++) {
      if (i >= second.start && i <= second.end) {
        count++;
      }
    }
  }

  return count;
};

export const sumOfOverlappingRanges = (input: string): number => {
  const lines = input.split('\n');
  return lines.reduce((acc, line) => {
    return acc + (countOverlappingRange(line) > 0 ? 1 : 0);
  }, 0);
};
