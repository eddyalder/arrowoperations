import { Direction, Sequence, GameConfig } from "../data/Strat";

// Game configuration
export const gameConfig: GameConfig = {
    initialTime: 5.0,              // Start with 5 seconds
    timeDecrease: 0.3,             // Decrease by 0.3 seconds each round
    minTime: 2.0,                  // Minimum 2 seconds
    initialSequenceLength: 4,      // Start with 4 arrows
    maxSequenceLength: 7,          // Max 7 arrows
    lengthIncreaseInterval: 3,     // Increase length every 3 completions
    timeMultiplier: 100,           // Base score = time * 100
    lengthMultiplier: 50,          // Additional score = length * 50
};

// Generate a random arrow sequence
export const generateRandomSequence = (length: number): Sequence => {
    const directions = Object.values(Direction);
    const randomDirections: Direction[] = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * directions.length);
        randomDirections.push(directions[randomIndex]);
    }

    return {
        directions: randomDirections,
        length: length,
    };
};

// Calculate sequence length based on completions
export const getSequenceLength = (completions: number): number => {
    const { initialSequenceLength, maxSequenceLength, lengthIncreaseInterval } = gameConfig;
    const additionalLength = Math.floor(completions / lengthIncreaseInterval);
    return Math.min(initialSequenceLength + additionalLength, maxSequenceLength);
};

// Calculate time limit based on level
export const getTimeLimit = (level: number): number => {
    const { initialTime, timeDecrease, minTime } = gameConfig;
    return Math.max(initialTime - (level * timeDecrease), minTime);
};

// Calculate score for completing a sequence
export const calculateScore = (timeRemaining: number, sequenceLength: number): number => {
    const { timeMultiplier, lengthMultiplier } = gameConfig;
    const baseScore = Math.floor(timeRemaining * timeMultiplier);
    const lengthBonus = sequenceLength * lengthMultiplier;
    return baseScore + lengthBonus;
};