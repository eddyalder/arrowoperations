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

export interface Strat {
    name: string;
    directions: Direction[];
    points: number;
    icon: string;
}