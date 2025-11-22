import StratLogo from '../assets/react.svg';

export enum Direction {
    Up = 'ArrowUp',
    Down = 'ArrowDown',
    Left = 'ArrowLeft',
    Right = 'ArrowRight',
}

// Map both arrow keys and WASD to directions
export const keyDirectionMap: { [key: string]: Direction } = {
    // Arrow keys
    'ArrowUp': Direction.Up,
    'ArrowDown': Direction.Down,
    'ArrowLeft': Direction.Left,
    'ArrowRight': Direction.Right,
    // WASD keys
    'w': Direction.Up,
    'W': Direction.Up,
    's': Direction.Down,
    'S': Direction.Down,
    'a': Direction.Left,
    'A': Direction.Left,
    'd': Direction.Right,
    'D': Direction.Right,
};

// Map directions to display symbols
export const directionSymbolMap: { [key in Direction]: string } = {
    [Direction.Up]: '↑',
    [Direction.Down]: '↓',
    [Direction.Left]: '←',
    [Direction.Right]: '→',
};

export enum GameState {
    Idle = 'idle',
    Playing = 'playing',
    GameOver = 'gameover',
}

export interface Sequence {
    directions: Direction[];
    length: number;
}

export interface GameConfig {
    initialTime: number;        // Starting time in seconds
    timeDecrease: number;        // Time decrease per level in seconds
    minTime: number;             // Minimum time allowed
    initialSequenceLength: number; // Starting sequence length
    maxSequenceLength: number;   // Maximum sequence length
    lengthIncreaseInterval: number; // Increase length every N completions
    timeMultiplier: number;      // Score multiplier for remaining time
    lengthMultiplier: number;    // Additional multiplier per arrow in sequence
}
