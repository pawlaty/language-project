import React, { useState, useEffect, useRef, useCallback } from "react";
import CardValue from './CardValue';
import PropTypes from 'prop-types';



function Card({ ...CardItemsProps}:any){

    const {nRound, startRound, onecard, toggle, delay, player, openedcards} = CardItemsProps;

    const [clickState,setClickState] = useState(false);

    const  cardToClick = useRef(null);

    /**
     * zdarzenie klikniecia na karte
     */

    //const press = useCallback(()=>{
    const press = () => {
        if(player === 'player'){
            setClickState(true);
            toggle(onecard,clickState);
            //setClickState(true);
            //e.target.children[0].className = "nativecard cardfront cardbox-hover pik";

        }
        else if(openedcards === 2 && player === "croupier"){
        //else if(openedcards > 1 && openedcards < 2 && player === "croupier"){
            // toggle(onecard,clickState);


            setTimeout(()=>{
                setClickState(true);
                toggle(onecard,clickState);
            },delay*100);


        }
    }
   // },[clickState, delay, onecard, player, toggle])
    ;

/*
    const pressCallBack =  useCallback(()=>{
        openedcards > 1 && openedcards < 4 && player === "croupier"
    },[press,openedcards, player]);
*/
    /**
     * zaraz po kliknieciu gdy zmieni sie zminenna newRound
     */
    useEffect(
        ()=>{
            /**Jezeli nowa runda -- odwroc karty */
                if(nRound){
                    toggle(onecard,nRound);

                    setTimeout(()=>{
                        setClickState(false);
                        startRound();
                    },delay*100);
                }

                if(openedcards > 1 && openedcards < 4 && player === "croupier"){
                    press();
                }
            },[nRound, openedcards]
    );

    return  (
           <div ref={cardToClick} className="cardbox"
                                  onFocus={press.bind(onecard)}
                                  onClick={press.bind(onecard)}>

                <div className={clickState?"cardbox_click card":"card"}>
                    <div className={onecard?`nativecard cardfront ${onecard.color}`:"nativecard cardfront"}>
                        <CardValue valCard={onecard?onecard.name:"JOCKER"}/>
                    </div>
                    <div className="nativecard cardback"></div>
                </div>
            </div>
            );
}

Card.defaultProps = {
    openedcards:0,
}

Card.propTypes = {
    nRound:PropTypes.bool.isRequired,
    startRound:PropTypes.func.isRequired,
    onecard:PropTypes.any,
    toggle:PropTypes.func.isRequired,
    delay:PropTypes.number.isRequired,
    player:PropTypes.string.isRequired,
    openedcard:PropTypes.number,
}

export default Card;
