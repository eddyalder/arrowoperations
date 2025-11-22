import React from 'react';
import './Timer.css';

interface TimerProps {
    timeRemaining: number;
    maxTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, maxTime }) => {
    const percentage = (timeRemaining / maxTime) * 100;
    const isLow = percentage < 30;
    const isCritical = percentage < 15;

    return (
        <div className="timer-container">
            <div className="timer-label">TIME</div>
            <div className={`timer-display ${isLow ? 'low' : ''} ${isCritical ? 'critical' : ''}`}>
                <div className="timer-value">{timeRemaining.toFixed(2)}s</div>
                <div className="timer-bar-container">
                    <div
                        className="timer-bar"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
