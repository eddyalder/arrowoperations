import React from 'react';
import './ScoreBoard.css';

interface ScoreBoardProps {
    score: number;
    highScore: number;
    completions: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, highScore, completions }) => {
    return (
        <div className="scoreboard">
            <div className="score-item main-score">
                <div className="score-label">SCORE</div>
                <div className="score-value glow-text">{score.toLocaleString()}</div>
            </div>

            <div className="score-divider"></div>

            <div className="score-item">
                <div className="score-label">SEQUENCES</div>
                <div className="score-value">{completions}</div>
            </div>

            <div className="score-divider"></div>

            <div className="score-item">
                <div className="score-label">HIGH SCORE</div>
                <div className="score-value high-score">{highScore.toLocaleString()}</div>
            </div>
        </div>
    );
};

export default ScoreBoard;
