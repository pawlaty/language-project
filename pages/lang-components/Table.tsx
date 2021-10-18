import React from "react";
import Image  from 'next/image';
import { Coin } from "./Coin";
import { CSSProperties } from "react";
import ButtNextRound from "./ButtNextRound";

export default function Table(...props:any[]){
    const point = props[0].pPoints;
    const url = "img/zeton.svg";
    const styll:{[key:string]:CSSProperties}={
        p:{
            width:"max-content",
        },

    };


    return (
        <div className="table flex-center">
             <div className="table_backgroud">
                {/*
                 <div className="coin flex-center">
                 <p style={styll.p}><b>{props[0].pPoints}</b></p>
                </div>*/}
                <Coin  pPoints={point} addr={url} wid="4rem"/>
                <ButtNextRound Top={50} Lft={50} func={props[0].newRound}/>
             </div>
        </div>
    );
}