export enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

export const wasdDirectionMap: { [x: string]: Direction } = {
    'w': Direction.Up,
    's': Direction.Down,
    'a': Direction.Left,
    'd': Direction.Right
};

export interface Strat {
    name: string;
    directions: Direction[];
    points: number;
}

