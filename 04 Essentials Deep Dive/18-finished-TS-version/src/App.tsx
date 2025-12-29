import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';
import {
  Players,
  PlayerSymbol,
  GameTurn,
  GameBoard as GameBoardType,
  PlayerSymbolOrNull,
} from './interfaces';

const PLAYERS: Players = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns: GameTurn[]): PlayerSymbol {
  let currentPlayer: PlayerSymbol = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns: GameTurn[]): GameBoardType {
  let gameBoard: GameBoardType = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard: GameBoardType, players: Players): string | null {
  let winner: string | null = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol: PlayerSymbolOrNull =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol: PlayerSymbolOrNull =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol: PlayerSymbolOrNull =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App(): JSX.Element {
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number): void {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns: GameTurn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart(): void {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol: PlayerSymbol, newName: string): void {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;