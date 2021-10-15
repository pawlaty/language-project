import React from "react";
import Image  from 'next/image';

export default function Table(...props:any[]){
    const url:string="/img/poker-table.svg";

    return (
        <div className="table">

            <Image alt="poker-table-to-play-in-cards"
                   src={url}
                   layout="fill"
                   objectFit="scale-down"
            />
            <p>Player: {props[0].pPoints}</p>
        </div>
    );
}