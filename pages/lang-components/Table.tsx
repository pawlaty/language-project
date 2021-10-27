import React from "react";
import { CSSProperties } from "react";
import ButtNextRound from "./ButtNextRound";
import PropTypes from 'prop-types';
import ListPoints from "./ListPoints";

function Table({...props}:any){
    const {pPoints, newRound, newGame} = props;
    const url_next_round = "img/newround.png";
    const url_new_game = "img/newgame.png";
    const styll:{[key:string]:CSSProperties}={
        p:{
            width:"max-content",
        },

    };


    return (
        <div className="table flex-center">
             <div className="table_backgroud">
                <ListPoints pPoints={pPoints} wid="8rem"/>
                <ButtNextRound Top={50} Lft={50} func={newRound} background={url_next_round}/>
                <ButtNextRound Top={150} Lft={50} func={newGame} background={url_new_game}/>
             </div>
        </div>
    );
}
Table.propTypes = {
    pPoints:PropTypes.array,
    newRound:PropTypes.func,
    newGame:PropTypes.func,
};
export default Table;