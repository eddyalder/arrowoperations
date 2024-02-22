import StratLogo from '../assets/react.svg';

export enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

export const keyDirectionMap: { [x: string]: Direction } = {
    'w': Direction.Up,
    's': Direction.Down,
    'a': Direction.Left,
    'd': Direction.Right,
    'ArrowUp': Direction.Up,
    'ArrowDown': Direction.Down,
    'ArrowLeft': Direction.Left,
    'ArrowRight': Direction.Right
};

export const stratTemplates = [
    {
        name: 'Strat 1',
        directions: [Direction.Up, Direction.Down, Direction.Left, Direction.Right],
        points: 50,
        icon: StratLogo,
    },
    {
        name: 'Strat 2',
        directions: [Direction.Left, Direction.Right, Direction.Up, Direction.Down],
        points: 50,
        icon: StratLogo
    },
    {
        name: 'Strat 3',
        directions: [Direction.Down, Direction.Up, Direction.Right, Direction.Left],
        points: 50,
        icon: StratLogo
    },
];

export interface Strat {
    name: string;
    id: string;
    directions: Direction[];
    points: number;
    icon: string;
}