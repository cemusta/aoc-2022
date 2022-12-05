type Command = {
  count: number;
  from: number;
  to: number;
};

export const parseStacks = (input: string) => {
  const lines = input.split('\n');

  let array: string[][] = [];
  const stackCount = Number(lines[lines.length - 1].replace(/\s/g, '').slice(-1));
  for (let i = 0; i < stackCount; i++) {
    array.push([]);
  }

  for (let i = lines.length - 2; i >= 0; i--) {
    for (let j = 0; j < stackCount; j++) {
      const stack = lines[i].slice(4 * j + 1, 4 * j + 2);
      if (stack !== ' ') {
        array[j].push(stack);
      }
    }
  }

  return array;
};

export const parseCommands = (commands: string): Command[] => {
  const lines = commands.split('\n').map((command) =>
    command
      .replace(/move\s/g, '')
      .replace(/from\s/g, '')
      .replace(/to\s/g, ''),
  );
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const [count, from, to] = lines[i].split(' ').map(Number);
    result.push({ count, from, to });
  }
  return result;
};

export const moveStacks = (arr: string[][], commands: Command[]) => {
  for (let c = 0; c < commands.length; c++) {
    for (let i = 0; i < commands[c].count; i++) {
      arr[commands[c].to - 1].push(arr[commands[c].from - 1].pop());
    }
  }
  return arr;
};

export const moveStacks9001 = (arr: string[][], commands: Command[]) => {
  for (let c = 0; c < commands.length; c++) {
    let temp = [];
    for (let i = 0; i < commands[c].count; i++) {
      temp.push(arr[commands[c].from - 1].pop());
    }
    temp.reverse();
    arr[commands[c].to - 1].push(...temp);
  }
  return arr;
};

export const findTopStacks = (input: string, newModel: boolean = false): string => {
  const [stacksInput, commandsInput] = input.split('\n\n');

  let stacks = parseStacks(stacksInput);
  let commands = parseCommands(commandsInput);

  let finalStacks = !newModel ? moveStacks(stacks, commands) : moveStacks9001(stacks, commands);

  const result = [];
  for (let i = 0; i < finalStacks.length; i++) {
    result.push(finalStacks[i][finalStacks[i].length - 1]);
  }
  return result.join('');
};
