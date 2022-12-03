export const itemPriority = (char: string): number => {
  const asciiValue = char.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    return asciiValue - 38;
  }
  return asciiValue - 96;
};

export const findCommonItem = (rucksack: string): string => {
  const items = rucksack.split('');
  const firstHalf = items.slice(0, items.length / 2);
  const secondHalf = items.slice(items.length / 2);
  const filteredArray = firstHalf.filter((value) => secondHalf.includes(value));
  return filteredArray[0];
};

export const sumOfPriorities = (rucksacks: string): number => {
  const lines = rucksacks.split('\n');
  const commonItems = lines.map((line) => findCommonItem(line));
  return commonItems.reduce((acc, item) => acc + itemPriority(item), 0);
};

export const findBadge = (first: string[], second: string[], third: string[]): string => {
  const commons = first.filter((value) => second.includes(value));
  const common = commons.filter((value) => third.includes(value));
  return common.filter((item, pos) => common.indexOf(item) == pos).join('');
};

export const sumOfBadges = (rucksacks: string): number => {
  const lines = rucksacks.split('\n');
  let sum = 0;

  for (let i = 0; i < lines.length; i += 3) {
    const first = lines[i].split('');
    const second = lines[i + 1].split('');
    const third = lines[i + 2].split('');
    sum += itemPriority(findBadge(first, second, third));
  }

  return sum;
};
