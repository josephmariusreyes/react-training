import { PlayerSymbol, GameBoard, GameTurn } from './game';

export interface PlayerProps {
  initialName: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onChangeName: (symbol: PlayerSymbol, newName: string) => void;
}

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameBoard;
}

export interface LogProps {
  turns: GameTurn[];
}

export interface GameOverProps {
  winner: string | null;
  onRestart: () => void;
}