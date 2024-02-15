import React, { useEffect } from 'react';
import { Strat, wasdDirectionMap } from '../../data/Strat';
import KeyArrow from './keyArrow';

type KeyBarProps = {
    strat: Strat;
};

const KeyBar: React.FC<KeyBarProps> = ({ strat }) => {
    const [arrowIndexState, setArrowIndexState] = React.useState(0);
    const [failState, setFailState] = React.useState(false);
    let arrowIndex = 0

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
                if (wasdDirectionMap[event.key] === strat.directions[arrowIndex]) {
                    setFailState(false)
                    arrowIndex++;
                    console.log("Correct Input");
                } else {
                    arrowIndex = 0;
                    console.log("Wrong Input");
                    setFailState(true)
                }
                setArrowIndexState(arrowIndex)
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        // Kind of a hacky way to have a delay after a fail before resetting
        async function sleepAndSet (time: number) {
            await new Promise((resolve) => setTimeout(resolve, time));
            setFailState(false)
        }
        sleepAndSet(250)
    }, [failState])

    return (
        <div className='keyBar'>
            {strat.directions.map((direction, index) => (
                <KeyArrow direction={direction} index={index} currentIndex={arrowIndexState} failState={failState}></KeyArrow>
            ))}
        </div>
    );
};

export default KeyBar;