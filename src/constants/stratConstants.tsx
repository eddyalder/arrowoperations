import { Direction, Strat } from "../data/Strat";

export const strats: Strat[] = [
    {
        name: 'Strat 1',
        directions: [Direction.Up, Direction.Down, Direction.Left, Direction.Right],
        points: 50
    },
    {
        name: 'Strat 2',
        directions: [Direction.Left, Direction.Right, Direction.Up, Direction.Down],
        points: 50
    },
    {
        name: 'Strat 3',
        directions: [Direction.Down, Direction.Up, Direction.Right, Direction.Left],
        points: 50
    },
];