import { Direction, Strat } from "../data/Strat";
import StratLogo from '../assets/react.svg';

export const strats: Strat[] = [
    // TODO: More of these + python generation script
    {
        name: 'Strat 1',
        directions: [Direction.Up, Direction.Down, Direction.Left, Direction.Right],
        points: 50,
        icon: StratLogo
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