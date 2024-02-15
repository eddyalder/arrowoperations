import React from 'react';
import { Strat } from '../../../data/Strat';
import StratItem from './stratItem';
import './stratBar.css';

type StartBarProps = {
    strats: Strat[];
};

const StratBar: React.FC<StartBarProps> = ({ strats }) => {
    return (
        <div className='stratBar'>
            {strats.map((strat) => (
                <StratItem strat={strat}></StratItem>
            ))}
        </div>
    );
};

export default StratBar;