import { Direction, Strat } from "../data/Strat";
import StratLogo from '../assets/react.svg';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const intitialState: Strat[] = [
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
    {
        name: 'Strat 4',
        directions: [Direction.Down, Direction.Up, Direction.Right, Direction.Left],
        points: 50,
        icon: StratLogo
    },
];

export const stratSlice = createSlice({
    name: 'strats',
    initialState: intitialState,
    reducers: {
        addStrat: (state: Strat[], action: PayloadAction<Strat>) => {
            state.push(action.payload);
        },
        removeStrat: (state: Strat[], action: PayloadAction<string>) => {
            return state.filter(strat => strat.name !== action.payload);
        },
        resetStrats: (state: Strat[]) => {
            return state = intitialState;
        }
    }
});

export const { addStrat, removeStrat, resetStrats } = stratSlice.actions;

export default stratSlice.reducer;