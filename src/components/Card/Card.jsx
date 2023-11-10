import Icon from "../Icons/Icon";
import { memo } from "react";

import './Card.css';

function Card({onPlay , player , index , gameEnd}){
    console.log(player);
    
    let icon = <Icon />

    if(player == "X"){
        icon = <Icon name="cross"/>
    }
    else if(player == "O"){
        icon = <Icon name="circle"/>
    }
    return (
        <div className="card" onClick={() => !gameEnd && onPlay(index)}>
            {icon}
        </div>
    );
}

export default memo(Card);