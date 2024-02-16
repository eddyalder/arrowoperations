import React, { useEffect } from 'react';
import { Strat, keyDirectionMap } from '../../data/Strat';
import KeyArrow from './keyArrow';
import './keyBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeStrat } from '../../store/slice';
import { isKeyValid } from '../../constants/keyConstants';

const KeyBar = () => {
    // Redux hooks
    const dispatch = useDispatch();
    const strats: Strat[] = useSelector((state: any) => state.strats);

    const [arrowIndexState, setArrowIndexState] = React.useState(0);
    const [failState, setFailState] = React.useState(false);
    let arrowIndex = 0;
    let stratIndex = 0;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isKeyValid(event.key)) {
                if (keyDirectionMap[event.key] === strats[stratIndex].directions[arrowIndex]) {
                    setFailState(false)
                    arrowIndex++;
                    console.log("Correct Input");
                    
                    // If the strat is complete, remove it from the list 
                    if (arrowIndex === strats[stratIndex].directions.length) {
                        arrowIndex = 0;
                        dispatch(removeStrat(strats[stratIndex].name));
                        console.log(stratIndex);
                        console.log(strats.length);

                        // If there are more strats, move to the next one, else reset to the first of the next level
                        if (stratIndex < strats.length) {
                            stratIndex++;
                        } else {
                            stratIndex = 0;
                        }
                        console.log("Strat Complete");
                    }
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
            // Remove event listener on component dismount
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
            {strats.length > 0 &&
                <>
                    {strats[stratIndex].directions.map((direction, index) => (
                        <KeyArrow direction={direction} index={index} currentIndex={arrowIndexState} failState={failState}></KeyArrow>
                    ))}
                </>
            }
        </div>
    );
};

export default KeyBar;