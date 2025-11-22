import { useState, useEffect, useCallback } from 'react';
import './App.css';
import GameDisplay from './components/GameDisplay/GameDisplay';
import Timer from './components/Timer/Timer';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import GameOver from './components/GameOver/GameOver';
import { GameState, Direction, keyDirectionMap } from './data/Strat';
import {
  generateRandomSequence,
  getSequenceLength,
  getTimeLimit,
  calculateScore
} from './constants/stratConstants';
import { playSound } from './utils/sounds';

const STORAGE_KEY = 'key-strat-hero-highscore';

function App() {
  // Game state
  const [gameState, setGameState] = useState<GameState>(GameState.Idle);
  const [currentSequence, setCurrentSequence] = useState<Direction[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

  // Input feedback
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Initialize game
  const startGame = useCallback(() => {
    const initialLength = getSequenceLength(0);
    const initialTime = getTimeLimit(0);
    const sequence = generateRandomSequence(initialLength);

    setGameState(GameState.Playing);
    setCurrentSequence(sequence.directions);
    setCurrentIndex(0);
    setScore(0);
    setCompletions(0);
    setTimeRemaining(initialTime);
    setMaxTime(initialTime);
    setIsCorrect(null);
  }, []);

  // Generate next sequence
  const nextSequence = useCallback(() => {
    const newCompletions = completions + 1;
    const sequenceLength = getSequenceLength(newCompletions);
    const timeLimit = getTimeLimit(newCompletions);
    const sequence = generateRandomSequence(sequenceLength);

    setCurrentSequence(sequence.directions);
    setCurrentIndex(0);
    setCompletions(newCompletions);
    setTimeRemaining(timeLimit);
    setMaxTime(timeLimit);
    setIsCorrect(null);
  }, [completions]);

  // Handle game over
  const handleGameOver = useCallback(() => {
    setGameState(GameState.GameOver);

    // Update high score
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem(STORAGE_KEY, score.toString());
    }
  }, [score, highScore]);

  // Timer countdown
  useEffect(() => {
    if (gameState !== GameState.Playing) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev - 0.01;

        if (newTime <= 0) {
          handleGameOver();
          return 0;
        }

        return newTime;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [gameState, handleGameOver]);

  // Handle keyboard input
  useEffect(() => {
    if (gameState !== GameState.Playing) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = keyDirectionMap[event.key];

      if (!direction) return;

      event.preventDefault();

      // Check if input matches current expected direction
      if (direction === currentSequence[currentIndex]) {
        // Correct input
        setIsCorrect(true);

        const newIndex = currentIndex + 1;

        if (newIndex >= currentSequence.length) {
          // Sequence completed!
          playSound('stratComplete');
          const earnedScore = calculateScore(timeRemaining, currentSequence.length);
          setScore((prev) => prev + earnedScore);

          // Small delay before next sequence
          setTimeout(() => {
            nextSequence();
          }, 500);
        } else {
          // Move to next arrow
          setCurrentIndex(newIndex);

          // Reset feedback after short delay
          setTimeout(() => setIsCorrect(null), 200);
        }
      } else {
        // Wrong input - reset sequence
        playSound('arrowIncorrect');
        setIsCorrect(false);
        setCurrentIndex(0);

        // Reset feedback after animation
        setTimeout(() => setIsCorrect(null), 400);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, currentSequence, currentIndex, timeRemaining, nextSequence]);

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="game-title">ARROW OPERATIONS</h1>

        {gameState === GameState.Idle && (
          <div className="start-screen fade-in">
            <p className="instructions">
              Input the arrow sequences using <span className="key-hint">ARROW KEYS</span> or <span className="key-hint">WASD</span>
            </p>
            <p className="instructions">
              Complete sequences before time runs out!
            </p>
            <p className="instructions">
              Score is based on time remaining and sequence length.
            </p>
            <button onClick={startGame} className="start-button">
              START MISSION
            </button>
          </div>
        )}

        {gameState === GameState.Playing && (
          <div className="game-screen fade-in">
            <ScoreBoard
              score={score}
              highScore={highScore}
              completions={completions}
            />

            <Timer
              timeRemaining={timeRemaining}
              maxTime={maxTime}
            />

            <GameDisplay
              sequence={currentSequence}
              currentIndex={currentIndex}
              isCorrect={isCorrect}
            />

            <div className="controls-hint">
              Use <span className="key-hint">↑ ↓ ← →</span> or <span className="key-hint">W A S D</span>
            </div>
          </div>
        )}

        {gameState === GameState.GameOver && (
          <GameOver
            score={score}
            highScore={highScore}
            completions={completions}
            onRestart={startGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
