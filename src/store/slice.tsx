import { Strat, stratTemplates } from "../data/Strat";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const generateStrats = (stratCount: number): Strat[] => {
    let strats: Strat[] = [];
    for (let i = 0; i < stratCount; i++) { 
        let randStrat = stratTemplates[Math.floor(Math.random() * (stratTemplates.length))]

        const stratToAdd: Strat = {
            name: randStrat.name,
            id: uuidv4(),
            directions: randStrat.directions,
            points: randStrat.points,
            icon: randStrat.icon
        } 

        strats.push(stratToAdd);
    }
    console.log(strats);
    return strats;
}

export const stratSlice = createSlice({
    name: 'strats',
    initialState: generateStrats(4),
    reducers: {
        addStrat: (state: Strat[], action: PayloadAction<Strat>) => {
            state.push(action.payload);
        },
        removeStrat: (state: Strat[], action: PayloadAction<string>) => {
            return state.filter(strat => strat.id !== action.payload);
        },
        resetStrats: (state: Strat[]) => {
            return state = generateStrats(4);
        }
    }
});

export const { addStrat, removeStrat, resetStrats } = stratSlice.actions;

export default stratSlice.reducer;