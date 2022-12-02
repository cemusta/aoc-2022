const dictionary: { [key: string]: string } = {
  A: 'ROCK',
  B: 'PAPER',
  C: 'SCISSORS',
  X: 'ROCK',
  Y: 'PAPER',
  Z: 'SCISSORS',
};

const scores: { [key: string]: number } = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  'PLAYER 1': 0,
  'PLAYER 2': 6,
  DRAW: 3,
};

const strategy: { [key: string]: string } = {
  X: 'PLAYER 1',
  Y: 'DRAW',
  Z: 'PLAYER 2',
};

const plays = ['ROCK', 'PAPER', 'SCISSORS'];

export const getWinner = (player1: string, player2: string) => {
  if (player1 === player2) {
    return 'DRAW';
  }
  if (player1 === 'ROCK' && player2 === 'SCISSORS') {
    return 'PLAYER 1';
  }
  if (player1 === 'SCISSORS' && player2 === 'PAPER') {
    return 'PLAYER 1';
  }
  if (player1 === 'PAPER' && player2 === 'ROCK') {
    return 'PLAYER 1';
  }
  return 'PLAYER 2';
};

const gameScore = (game: string): number => {
  const [first, second] = game.split(' ');
  const gameOutcome = getWinner(dictionary[first], dictionary[second]);
  return scores[gameOutcome] + scores[dictionary[second]];
};

const gameScoreWithStrategy = (game: string): number => {
  const [first, second] = game.split(' ');
  const shouldPlay = plays.find((play) => getWinner(dictionary[first], play) === strategy[second]);

  const gameOutcome = getWinner(dictionary[first], shouldPlay);
  return scores[gameOutcome] + scores[shouldPlay];
};

export const totalScore = (input: string, strategy: boolean = false): number => {
  const games = input.split('\n');
  const howToScore = strategy ? gameScoreWithStrategy : gameScore;
  return games.reduce((score, game) => score + howToScore(game), 0);
};
