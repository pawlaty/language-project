//import Image from 'next/image'
//import revers1 from "../../public/img/revers1.png";
import { useState, useEffect } from "react";
//import { ICard } from "./ICard";
import CardValue from './CardValue';
//import type { AppProps } from 'next/app'

//function LangLayout({ Component, pageProps }: AppProps) {
function Card({nRound,onecard,toggle,delay}:any) {

    const [clickState,setClickState] = useState(false);
    ///console.log(...props);
    const press = ()=>{
       setClickState(true);
       toggle(onecard,clickState); //add clickState
      // e.target.children[0].className = "nativecard cardfront cardbox-hover pik";
    };


    useEffect(
        ()=>{
            if(nRound){

                setTimeout(()=>{
                    setClickState(false);
                    toggle(onecard,clickState);

                    console.log('new round');
                },delay*100);

            }


        },[nRound]
    );



    return  (
        <div className="cardbox" onClick={press.bind(onecard)}>
            <div className={clickState?"cardbox_click card":"card"}>
                <div className={`nativecard cardfront ${onecard.color}`}>
                    <CardValue valCard={onecard.name}/>
                </div>
                <div className="nativecard cardback"></div>
            </div>
        </div>);
}
export default Card;
