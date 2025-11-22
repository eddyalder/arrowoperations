import React from 'react';
import { Direction, directionSymbolMap } from '../../data/Strat';
import './GameDisplay.css';

interface GameDisplayProps {
    sequence: Direction[];
    currentIndex: number;
    isCorrect: boolean | null;
}

const GameDisplay: React.FC<GameDisplayProps> = ({ sequence, currentIndex, isCorrect }) => {
    return (
        <div className="game-display">
            <div className="sequence-container">
                {sequence.map((direction, index) => {
                    const isActive = index === currentIndex;
                    const isCompleted = index < currentIndex;
                    const isFailed = isCorrect === false && index === currentIndex;

                    return (
                        <div
                            key={index}
                            className={`arrow-box ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isFailed ? 'failed' : ''}`}
                        >
                            <span className="arrow-symbol">
                                {directionSymbolMap[direction]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GameDisplay;
