import React from 'react';
import './GameOver.css';

interface GameOverProps {
    score: number;
    highScore: number;
    completions: number;
    onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, highScore, completions, onRestart }) => {
    const isNewHighScore = score > highScore;

    return (
        <div className="game-over-overlay">
            <div className="game-over-container">
                <h1 className="game-over-title glitch">GAME OVER</h1>

                {isNewHighScore && (
                    <div className="new-high-score">
                        <span className="glow-text">★ NEW HIGH SCORE ★</span>
                    </div>
                )}

                <div className="game-over-stats">
                    <div className="stat-item">
                        <div className="stat-label">FINAL SCORE</div>
                        <div className="stat-value score-final">{score.toLocaleString()}</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-label">SEQUENCES COMPLETED</div>
                        <div className="stat-value">{completions}</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-label">HIGH SCORE</div>
                        <div className="stat-value high-score-value">{Math.max(score, highScore).toLocaleString()}</div>
                    </div>
                </div>

                <button className="restart-button" onClick={onRestart}>
                    RESTART MISSION
                </button>
            </div>
        </div>
    );
};

export default GameOver;
