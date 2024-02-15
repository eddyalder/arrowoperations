import React from 'react';
import { Direction } from '../../data/Strat';
import UpArrow from '../../assets/UpArrow.svg';
import DownArrow from '../../assets/DownArrow.svg';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';
import './keyBar.css'

type KeyArrowProps = {
    direction: Direction;
    index: number;
    currentIndex: number;
    failState: boolean;
};

const ArrowKey: React.FC<KeyArrowProps> = ({ direction, index, currentIndex, failState }) => {
    let arrowSvg = '';
    let arrowStyle = (currentIndex > index) ? 'arrowCorrect' : 'arrow'
    arrowStyle = (failState) ? 'arrowFail' : arrowStyle
    console.log(index);
    console.log(arrowStyle);
    
    switch (direction) {
        case Direction.Up:
            arrowSvg = UpArrow;
            break;
        case Direction.Down:
            arrowSvg = DownArrow;
            break;
        case Direction.Left:
            arrowSvg = LeftArrow;
            break;
        case Direction.Right:
            arrowSvg = RightArrow;
            break;
        default:
            arrowSvg = '';
            break;
    }
    
    return <div>
        <img className={arrowStyle} src={arrowSvg} alt="" />
    </div>
};

export default ArrowKey;