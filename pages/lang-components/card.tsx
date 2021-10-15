//import Image from 'next/image'
import revers1 from "../../public/img/revers1.png";
import { useEffect,useState } from "react";
import { ICard } from "./ICard";
import CardValue from './CardValue';
//import type { AppProps } from 'next/app'

//function LangLayout({ Component, pageProps }: AppProps) {
function Card(...props:any[]) {

    const [clickState,setClickState] = useState(false);

    const press = (e:any)=>{
       setClickState(true);
      // console.log({clickState});
       console.debug({...e.target.parentElement.children[0].className});
       props[0].toggle(props[0].onecard);
      // e.target.children[0].className = "nativecard cardfront cardbox-hover pik";
    };

    return  (
        <div className="cardbox" onClick={press.bind(props[0].onecard)}>
            <div className={clickState?"cardbox_click card":"card"}>
                <div className={`nativecard cardfront ${props[0].onecard.color}`}>
                    <CardValue valCard={props[0].onecard.name}/>
                </div>
                <div className="nativecard cardback"></div>
            </div>
        </div>);
}
export default Card;
