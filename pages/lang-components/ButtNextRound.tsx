import { CSSProperties } from "react";
import Coin from "./Coin";
import {useState} from 'react';

export default function  ButtNextRound({Top,Lft,func,background}:any){
    const press = 3;
    const [_top,set_Top] = useState(Top);
    const [_lft,set_Lft] = useState(Lft);
    const url = background;
    const styl:{[key:string]:CSSProperties}={
        butt:{
            position:"absolute",
            top:toStr(_top),
            left:toStr(_lft)
        },
    }

    /**dodaje px do stringa */
    function toStr(val:any){
        let c = val + "px";
        return c;
    }

    function lets_click(){
        /**aminacja wcisniecia */
            set_Top((prevState:any)=>Number(prevState)+press);
            set_Lft((prevState:any)=>Number(prevState)+press);
            setTimeout(()=>{
                set_Top((prevState:any)=>Number(prevState)-press);
                set_Lft((prevState:any)=>Number(prevState)-press);
            },100);

        /**logika clikniecia */
            func();
    }

    return(
        <div role="button" className="butt" onClick={lets_click} style={styl.butt}><Coin  pPoints={""} addr={url} wid="4rem"/></div>
    );
}