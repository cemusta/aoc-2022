export const isArrayUnique = (array: string[]): boolean => {
  return array.length === new Set(array).size;
};

export const findStartOfPacket = (input: string, uniqueChars: number = 4): number => {
  const array = input.slice(0, uniqueChars).split('');

  for (let i = uniqueChars; i < input.length; i++) {
    if (isArrayUnique(array)) {
      return i;
    }
    array.shift();
    array.push(input[i]);
  }

  return -1;
};
