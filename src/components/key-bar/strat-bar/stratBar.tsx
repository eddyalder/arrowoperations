import { Strat } from '../../../data/Strat';
import StratItem from './stratItem';
import './stratBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetStrats } from '../../../store/slice';

const StratBar = () => {
    const dispatch = useDispatch();
    const strats: Strat[] = useSelector((state: any) => state.strats);

    useEffect(() => {
        // Handle level finish here
        if (strats.length === 0) {
            alert('Level Complete!');
            dispatch(resetStrats());
        }
    }, [strats])

    return (
        <div className='stratBar'>
            {strats.length > 0 &&
                <>
                    {strats.map((strat) => (
                        <StratItem strat={strat}></StratItem>
                    ))}
                </>
            }
        </div>
    );
};

export default StratBar;