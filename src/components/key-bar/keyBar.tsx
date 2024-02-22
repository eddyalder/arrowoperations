import { useState, useEffect } from 'react';
import { Strat, keyDirectionMap } from '../../data/Strat';
import KeyArrow from './keyArrow';
import arrowPressCorrectSound from '../../assets/sounds/arrowPress.mp3';
import stratCompleteSound from '../../assets/sounds/stratComplete.mp3';
import arrowPressIncorrectSound from '../../assets/sounds/arrowIncorrect.mp3';
import { useDispatch, useSelector } from 'react-redux';
import { removeStrat } from '../../store/slice';
import { isKeyValid } from '../../constants/keyConstants';
import { playSound } from './utils/sounds';
import './keyBar.css'

const KeyBar = () => {
    // Redux hooks
    const dispatch = useDispatch();
    const strats: Strat[] = useSelector((state: any) => state.strats);

    const [arrowIndexState, setArrowIndexState] = useState(0);
    const [failState, setFailState] = useState(false);
    let arrowIndex = 0;
    let stratIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {    
        if (isKeyValid(event.key)) {
            // If the key pressed is the next in the sequence, move to the next arrow
            if (keyDirectionMap[event.key] === strats[stratIndex].directions[arrowIndex]) {
                // More good sounds here - https://mixkit.co/free-sound-effects/arcade/
                playSound(arrowPressCorrectSound);
                setFailState(false)
                arrowIndex++;
                console.log("Correct Input");
                
                // If the strat is complete, remove it from the list 
                if (arrowIndex === strats[stratIndex].directions.length) {
                    playSound(stratCompleteSound);
                    arrowIndex = 0;
                    dispatch(removeStrat(strats[stratIndex].id));
                    console.log(stratIndex);
                    console.log(strats.length);

                    // If there are more strats, move to the next one, else reset to the first of the next level
                    // TODO: Fix this shit and keep level complete logic in one place
                    if (stratIndex < strats.length - 1) {
                        stratIndex++;
                    } else {
                        stratIndex = 0;
                    }
                    console.log("Strat Complete");
                }
            } else {
                playSound(arrowPressIncorrectSound);
                arrowIndex = 0;
                console.log("Wrong Input");
                setFailState(true)
            }
            setArrowIndexState(arrowIndex)
        }
    };

    useEffect(() => {
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
                        <KeyArrow key={index} direction={direction} index={index} currentIndex={arrowIndexState} failState={failState}></KeyArrow>
                    ))}
                </>
            }
        </div>
    );
};

export default KeyBar;