import { Strat } from "../../../data/Strat";

type StratItemProps = {
    strat: Strat;
};

const StratItem: React.FC<StratItemProps> = ({ strat }) => {
    return <div>
        <img className="stratItem" src={strat.icon} alt="" />
    </div>
}

export default StratItem;