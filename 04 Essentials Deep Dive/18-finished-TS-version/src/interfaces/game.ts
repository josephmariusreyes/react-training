export type PlayerSymbol = 'X' | 'O';

export type PlayerSymbolOrNull = PlayerSymbol | null;

export interface Square {
  row: number;
  col: number;
}

export interface WinningPosition {
  row: number;
  column: number;
}

export interface GameTurn {
  square: Square;
  player: PlayerSymbol;
}

export interface Players {
  X: string;
  O: string;
}

export type GameBoard = PlayerSymbolOrNull[][];

export type WinningCombination = WinningPosition[];